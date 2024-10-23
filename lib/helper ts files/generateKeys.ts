import crypto from 'crypto';

// Generate random secrets
const ACCESS_TOKEN_SECRET: string = crypto.randomBytes(32).toString('hex');
const REFRESH_TOKEN_SECRET: string = crypto.randomBytes(32).toString('hex');

// Export secrets
export { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET };
