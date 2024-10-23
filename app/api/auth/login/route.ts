// import { NextResponse } from 'next/server';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import dbConnect from '../../../../lib/models/dbconnect';
// import User from '../../../../lib/models/User';
// import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../../../../lib/helper ts files/generateKeys'; // Ensure correct import path

// export async function POST(req: Request) {
//   try {
//     const { username, password } = await req.json();

//     if (!username || !password) {
//       return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
//     }

//     // Connect to the database
//     await dbConnect();

//     // Find user by username
//     const user = await User.findOne({ username });
//     if (!user) {
//       return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
//     }

//     // Generate tokens
//     const accessToken = jwt.sign(
//       { id: user._id, username: user.username },
//       ACCESS_TOKEN_SECRET,
//       { expiresIn: '1h' }
//     );
//     const refreshToken = jwt.sign(
//       { id: user._id, username: user.username },
//       REFRESH_TOKEN_SECRET,
//       { expiresIn: '7d' }
//     );

//     // Update refresh token in user record
//     user.refreshToken = refreshToken;
//     await user.save();

//     // Set cookies using NextResponse.cookies.set
//     // const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
//     const response = NextResponse.redirect('http://localhost:3000');
//     response.cookies.set('accessToken', accessToken, { httpOnly: true, path: '/', maxAge: 3600 });
//     response.cookies.set('refreshToken', refreshToken, { httpOnly: true, path: '/', maxAge: 604800 });

//     return response;
//   } catch (err) {
//     if (err instanceof Error) {
//       console.error('Error during login:', err.message);
//       return NextResponse.json({ message: err.message }, { status: 500 });
//     } else {
//       console.error('Unknown error during login:', err);
//       return NextResponse.json({ message: 'Unknown error' }, { status: 500 });
//     }
//   }
// }






// import { NextResponse } from 'next/server';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import dbConnect from '../../../../lib/models/dbconnect';
// import User from '../../../../lib/models/User';
// import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../../../../lib/helper ts files/generateKeys'; // Ensure correct import path

// export async function POST(req: Request) {
//   try {
//     const { username, password } = await req.json();

//     if (!username || !password) {
//       return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
//     }

//     // Connect to the database
//     await dbConnect();

//     // Find user by username
//     const user = await User.findOne({ username });
//     if (!user) {
//       return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
//     }

//     // Generate tokens
//     const accessToken = jwt.sign(
//       { id: user._id, username: user.username },
//       ACCESS_TOKEN_SECRET,
//       { expiresIn: '1h' }
//     );
//     const refreshToken = jwt.sign(
//       { id: user._id, username: user.username },
//       REFRESH_TOKEN_SECRET,
//       { expiresIn: '7d' }
//     );

//     // Update refresh token in user record
//     user.refreshToken = refreshToken;
//     await user.save();

//     // Create a redirect response
//     const response = NextResponse.redirect(new URL('/', req.url));

//     // Set cookies
//     response.cookies.set('accessToken', accessToken, { httpOnly: true, path: '/', maxAge: 3600 });
//     response.cookies.set('refreshToken', refreshToken, { httpOnly: true, path: '/', maxAge: 604800 });

//     return response;
//   } catch (err) {
//     if (err instanceof Error) {
//       console.error('Error during login:', err.message);
//       return NextResponse.json({ message: err.message }, { status: 500 });
//     } else {
//       console.error('Unknown error during login:', err);
//       return NextResponse.json({ message: 'Unknown error' }, { status: 500 });
//     }
//   }
// }




import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../../lib/models/dbconnect';
import User from '../../../../lib/models/User';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../../../../lib/helper ts files/generateKeys'; // Ensure correct import path

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
    }

    // Connect to the database
    await dbConnect();

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
    }

    // Generate tokens
    const accessToken = jwt.sign(
      { id: user._id, username: user.username },
      ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );
    const refreshToken = jwt.sign(
      { id: user._id, username: user.username },
      REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    // Update refresh token in user record
    user.refreshToken = refreshToken;
    await user.save();

    // Create a redirect response
    const response = NextResponse.redirect('http://localhost:3000');

    // Set cookies
    response.cookies.set('accessToken', accessToken, { httpOnly: true, path: '/', maxAge: 3600 });
    response.cookies.set('refreshToken', refreshToken, { httpOnly: true, path: '/', maxAge: 604800 });

    console.log('Redirect response created:', response); // Added for debugging

    return response;
  } catch (err) {
    console.error('Detailed error:', err); // Added for debugging
    if (err instanceof Error) {
      console.error('Error during login:', err.message);
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      console.error('Unknown error during login:', err);
      return NextResponse.json({ message: 'Unknown error' }, { status: 500 });
    }
  }
}