"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the type for the psychiatrist object
interface Psychiatrist {
  id: string;
  tags: {
    name?: string;
    "addr:full"?: string;
    "addr:district"?: string;
    "addr:postcode"?: string;
  };
}

interface UserLocation {
  lat: number;
  lon: number;
}

export default function Home() {
  const [psychiatrists, setPsychiatrists] = useState<Psychiatrist[]>([]);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching location:", error);
        setLoading(false); // Stop loading in case of an error
      }
    );
  }, []);

  useEffect(() => {
    // Fetch psychiatrists only after userLocation is set
    if (userLocation) {
      const fetchPsychiatrists = async () => {
        setLoading(true); // Start loading
        try {
          const response = await axios.get<Psychiatrist[]>("/api/Psychiatrists", {
            params: {
              lat: userLocation.lat,
              lon: userLocation.lon,
              radius: 5000, // 5km radius
            },
          });
          setPsychiatrists(response.data);
        } catch (error) {
          console.error("Error fetching psychiatrists:", error);
        } finally {
          setLoading(false); // Stop loading
        }
      };

      fetchPsychiatrists();
    }
  }, [userLocation]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-xl font-medium text-gray-600">Loading...</div>
        </div>
      ) : psychiatrists.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {psychiatrists.map((psychiatrist) => (
            <div
              key={psychiatrist.id}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {psychiatrist.tags.name || "Dr. Sanhita Roy"}
              </h3>
              <p className="mb-1 text-gray-600">
                <b>Address:</b> {psychiatrist.tags["addr:full"] || "Not available"}
              </p>
              <p className="mb-1 text-gray-600">
                <b>District:</b> {psychiatrist.tags["addr:district"] || "Not specified"}
              </p>
              <p className="mb-1 text-gray-600">
                <b>Postcode:</b> {psychiatrist.tags["addr:postcode"] || "Not available"}
              </p>

              <div className="mt-4">
                <button
                  onClick={() => (window.location.href = "/book")}
                  className="w-full px-4 py-2 mb-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Book Online Session
                </button>
                <button
                  onClick={() => (window.location.href = "/book")}
                  className="w-full px-4 py-2 text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
                >
                  Book Offline Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">
          No psychiatrists found nearby.
        </div>
      )}
    </div>
  );
}
