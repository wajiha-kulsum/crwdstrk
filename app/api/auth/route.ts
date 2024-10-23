import { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import dbConnect from '../../../lib/models/dbconnect'; // Adjust the import path as necessary
import User from '../../../lib/models/User'; // Adjust the import path as necessary
import { ACCESS_TOKEN_SECRET } from '../../../lib/helper ts files/generateKeys'; // Adjust the import path as necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect(); // Connect to the database

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const token = req.cookies.jwt; // Get the JWT from cookies

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded: any = verify(token, ACCESS_TOKEN_SECRET); // Verify the token

    // Fetch user data from the database
    const user = await User.findById(decoded.id).select('-password -refreshToken'); // Exclude sensitive information

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send user data in response
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
