import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../../lib/models/dbconnect';
import User from '../../../../lib/models/User';
import { ACCESS_TOKEN_SECRET,REFRESH_TOKEN_SECRET } from '../../../../lib/helper ts files/generateKeys';
export async function GET(req: Request) {
  try {
    const cookies = req.headers.get('cookie') || '';
    const refreshToken = cookies.split('; ').find(c => c.startsWith('refreshToken='))?.split('=')[1];

    if (!refreshToken) {
      return NextResponse.json({ message: 'Refresh token is missing.' }, { status: 400 });
    }

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    } catch (err) {
      return NextResponse.json({ message: 'Invalid refresh token.' }, { status: 401 });
    }

    // Connect to the database
    await dbConnect();

    // Find user by ID
    const user = await User.findById((decoded as { id: string }).id);
    if (!user || user.refreshToken !== refreshToken) {
      return NextResponse.json({ message: 'User not found or refresh token mismatch.' }, { status: 401 });
    }

    // Remove refresh token
    user.refreshToken = undefined;
    await user.save();

    // Clear cookies
    const response = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
    response.headers.set('Set-Cookie', 'jwt=; HttpOnly; Path=/; Max-Age=0;');
    response.headers.set('Set-Cookie', 'refreshToken=; HttpOnly; Path=/; Max-Age=0;');

    return response;
  } catch (err) {
    console.error('Error during logout:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
