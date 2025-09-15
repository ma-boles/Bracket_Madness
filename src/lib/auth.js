import { isDemo } from '@/config';
import jwt from 'jsonwebtoken';

export function verifyToken(token) {
    const secretKey = process.env.JWT_SECRET;

    if(isDemo) {
        console.log("Demo mode - returning mock user for token");
        return {
                id: 1,
                userId: 1,
                username: 'demoUser',
                email: 'demo@example.com',
        };
    }
    
    
    if (!secretKey) {
    throw new Error("JWT secret key is not defined in environment variables");
    }

    try {
        return jwt.verify(token, secretKey);
    } catch(error) {
        console.error('Token verification failed:', error);
        return null;
    }
}