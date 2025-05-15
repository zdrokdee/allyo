import { NextRequest, NextResponse } from 'next/server';
import { verifyFirebaseToken } from '../../../lib/verifyToken';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    });

    export async function POST(req: NextRequest) {
    console.log("API HIT: /api/verify_user");
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split('Bearer ')[1];
    console.log('TOKEN:', token.slice(0, 20)); // log only partial token


    if (!token) {
        return NextResponse.json({ error: 'No token provided' }, { status: 400 });
    }

    try {
        const decoded = await verifyFirebaseToken(token);
        
        const { uid, email } = decoded;

        // 1. Check if user exists
        const userResult = await pool.query('SELECT * FROM "User" WHERE firebase_uid = $1', [uid]);

        if (userResult.rowCount === 0) {
        // 2. If user does not exist, create user only (no profile yet)
        await pool.query(
            'INSERT INTO "User" (firebase_uid, email, is_active, auth_provider) VALUES ($1, $2, $3, $4)',
            [uid, email, true, decoded.firebase.sign_in_provider]
        );
        }

        // 3. Check if profile exists
        const profileResult = await pool.query('SELECT * FROM "UserProfile" WHERE firebase_uid = $1', [uid]);

        if (profileResult.rowCount === 0) {
        // 4. No profile -> Redirect to registration
        return NextResponse.json({
            message: 'Profile missing. Please complete registration.',
            redirect: '/registration',
        });
        }

        // 5. User and profile exist -> Redirect to profile page
        return NextResponse.json({
        message: 'User and profile exist',
        user: userResult.rows[0],
        redirect: `/profile/${uid}`,
        });

    } catch (err: any) {
        console.error('verify_user error:', err);
        return NextResponse.json({ error: err.message }, { status: 401 });
    }
}
