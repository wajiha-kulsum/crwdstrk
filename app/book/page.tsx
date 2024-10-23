"use client";
import React, { useState, useEffect } from "react";

const AppointmentScheduler = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlots, setTimeSlots] = useState<{ [key: string]: string[] }>({});
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [appointment, setAppointment] = useState({
    name: "",
    date: "",
    timeSlot: "",
  });
  const [confirmation, setConfirmation] = useState(false);

  // Updated time slots from October 23rd (12 PM) to October 27th (7 PM)
  useEffect(() => {
    setTimeSlots({
      "2024-10-23": [
        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
        "06:00 PM",
      ],
      "2024-10-24": ["09:00 AM", "12:00 PM", "03:00 PM", "05:00 PM"],
      "2024-10-25": ["10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
      "2024-10-26": ["11:00 AM", "01:00 PM", "03:00 PM", "06:00 PM"],
      "2024-10-27": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
    });
  }, []);

  // Handle date change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    if (timeSlots[date]) {
      setAvailableSlots(timeSlots[date]);
    } else {
      setAvailableSlots([]);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, date, timeSlot } = appointment;
    if (name && date && timeSlot) {
      setConfirmation(true);
      // Remove the booked time slot from availableSlots and update timeSlots
      setAvailableSlots((prevSlots) =>
        prevSlots.filter((slot) => slot !== timeSlot)
      );
      setTimeSlots((prevSlots) => ({
        ...prevSlots,
        [date]: prevSlots[date].filter((slot) => slot !== timeSlot),
      }));
    }
  };

  return (
    <div className="container max-w-lg p-6 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Book an Appointment</h1>

      {/* Online/Offline Status */}
   

      {/* Appointment Form */}
      <form id="appointment-form" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Enter your name"
            value={appointment.name}
            onChange={(e) =>
              setAppointment({ ...appointment, name: e.target.value })
            }
            className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            required
            value={appointment.date}
            onChange={(e) => {
              handleDateChange(e);
              setAppointment({ ...appointment, date: e.target.value });
            }}
            className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="time-slot"
            className="block text-sm font-medium text-gray-700"
          >
            Available Time Slots:
          </label>
          <select
            id="time-slot"
            required
            value={appointment.timeSlot}
            onChange={(e) =>
              setAppointment({ ...appointment, timeSlot: e.target.value })
            }
            className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a time slot
            </option>
            {availableSlots.length > 0 ? (
              availableSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No available slots
              </option>
            )}
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white transition duration-150 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>

      {/* Appointment Confirmation */}
      {confirmation && (
        <div id="confirmation" className="p-4 mt-6 bg-green-100 border border-green-200 rounded-md">
          <h2 className="text-xl font-semibold text-green-800">Appointment Confirmation</h2>
          <p id="confirmation-message" className="mt-2 text-gray-700">
            Appointment confirmed for {appointment.name} on {appointment.date} at {appointment.timeSlot}. <br />
            For Online consultation visit{" "}
            <a href="http://localhost:3002/video" className="text-blue-600 hover:underline">
              Online consultation
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
