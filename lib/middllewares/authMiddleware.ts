import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

// Extend NextApiRequest to include user property
interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    _id: string;
    username?: string;
    email?: string;
  };
}

export const authMiddleware = (
  req: AuthenticatedRequest,
  res: NextApiResponse,
  next: Function
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization header missing or malformed' });
    }

    // Extract token from the 'Authorization' header
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // Attach the decoded token (user info) to the request object
    req.user = decoded as { _id: string; username: string; email: string };

    // Call the next middleware function in the stack
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ message: 'Invalid token' });
    } else {
      console.error('Error verifying token:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};
