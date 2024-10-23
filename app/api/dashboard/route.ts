import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/models/dbconnect';
import User from '../../../lib/models/User';
import jwt from 'jsonwebtoken' 
import App from 'next/app';


// Assuming this is used in the App Router
export async function GET(req: Request) {
  try {
    // Example to extract user from headers (assuming you're sending a token in headers)
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Authorization header missing or malformed' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = (decoded as { _id: string })._id;

    // Connect to the database
    await dbConnect();

    // Fetch user details from the database
    const userData = await User.findById(userId).select('-password'); // Exclude password field

    if (!userData) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Failed to fetch user data' }, { status: 500 });
  }
}
