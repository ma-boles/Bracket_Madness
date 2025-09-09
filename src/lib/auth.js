import { isDemo } from '@/config';
import jwt from 'jsonwebtoken';

export function verifyToken(token) {
    if(isDemo) {
        console.log("Demo mode - returning mock user for token");
        return {
                id: 1,
                userId: 1,
                username: 'demoUser',
                email: 'demo@example.com',
        };
    }
    
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch(error) {
        console.error('Token verification failed:', error);
        return null;
    }
}