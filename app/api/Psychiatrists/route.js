import { NextResponse } from 'next/server';
import axios from 'axios';

// Define the API route handler for fetching psychiatrists
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const radius = searchParams.get('radius');

  // OpenStreetMap (Overpass API) query to get psychiatrists
  const query = `
[out:json];
(
  node["amenity"="doctors"](around:50000, 23.8315, 91.2868);
  node["amenity"="clinic"](around:50000, 23.8315, 91.2868);
);
out body;
>;
out skel qt;


  `;

  try {
    const response = await axios.post(`https://overpass-api.de/api/interpreter`,query,{
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    const data = response.data;
    return NextResponse.json(data.elements);
  } catch (error) {
    console.error('Error fetching data from Overpass API:', error);
    return NextResponse.json({ message: 'Error fetching psychiatrists.' }, { status: 500 });
  }
}
