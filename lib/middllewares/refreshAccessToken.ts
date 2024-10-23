const express=require('express')
const { Request, Response, NextFunction } = express;
const dbConnect = require('../../../../lib/models/dbconnect').default; // Use .default for default exports
const User = require('../../../../lib/models/users').default; // Assuming IUser is a named export
const bcrypt = require('bcrypt');
const { IUser } = require('../../../../lib/models/users');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

interface AuthRequest extends Request {
  user?: any;
}

const refreshAccessToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies.jwt;
    const refreshToken = req.cookies.refreshToken;

    if (!accessToken) {
      return res.status(401).json({ msg: 'Access token is missing.' });
    }

    try {
      jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
      return next(); // If the access token is valid, proceed
    } catch (err: any) {
      if (err.name === 'TokenExpiredError') {
        if (!refreshToken) {
          return res.status(401).json({ msg: 'Refresh token is missing.' });
        }

        const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as JwtPayload;
        if (!decoded) {
          return res.status(401).json({ msg: 'Invalid refresh token.' });
        }

        const user = await User.findById(decoded.id);
        if (!user || user.refreshToken !== refreshToken) {
          return res.status(401).json({ msg: 'User not found or refresh token mismatch.' });
        }

        const newAccessToken = jwt.sign({ id: user._id, username: user.username }, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        res.cookie('jwt', newAccessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 3600000, // 1 hour
          sameSite: 'Strict',
        });

        req.user = user; // Attach user to the request object
        return next();
      } else {
        return res.status(401).json({ msg: 'Invalid token.' });
      }
    }
  } catch (err) {
    console.error('Error in refreshAccessToken middleware:', err);
    return res.status(500).json({ msg: 'Server error' });
  }
};

export default refreshAccessToken;
