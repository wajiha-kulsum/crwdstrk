import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../../lib/models/dbconnect';
import User from '../../../../lib/models/User';
import { ACCESS_TOKEN_SECRET } from '../../../../lib/helper ts files/generateKeys';

export async function POST(req: Request) {
  try {
    const { name, email, username, password, DOB, Bio } = await req.json();

    if (!name || !email || !username || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Connect to the database
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'Account with this Email already exists' }, { status: 400 });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return NextResponse.json({ message: 'This username is not available' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, username, password: hashedPassword, DOB, Bio });

    // Save user in database
    await user.save();

    // Generate token
    const token = jwt.sign({ username: user.username, id: user._id }, ACCESS_TOKEN_SECRET);

    // Set token in response headers (for client-side management)
    const response = NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    response.headers.set('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600`);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error during signup:', error.message);
      return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    } else {
      console.error('Unknown error during signup:', error);
      return NextResponse.json({ message: 'Unknown server error' }, { status: 500 });
    }
  }
}
