import { NextRequest, NextResponse } from 'next/server';
import type { SignInRequest, SignInResponse, ApiError } from '@/lib/types';

// Mock user database - in production, use a real database with hashed passwords
const mockUsers = [
  { id: '1', email: 'demo@clarityflow.com', password: 'demo123', name: 'Demo User' },
  { id: '2', email: 'admin@clarityflow.com', password: 'admin123', name: 'Admin User' },
];

export async function POST(request: NextRequest) {
  try {
    const body: SignInRequest = await request.json();

    // Validate required fields
    if (!body.email || !body.password) {
      const error: ApiError = {
        success: false,
        error: 'Email and password are required',
        code: 'VALIDATION_ERROR',
      };
      return NextResponse.json(error, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(body.email)) {
      const error: ApiError = {
        success: false,
        error: 'Invalid email address format',
        code: 'INVALID_EMAIL',
      };
      return NextResponse.json(error, { status: 400 });
    }

    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Find user (in production, use proper password hashing like bcrypt)
    const user = mockUsers.find(
      (u) => u.email.toLowerCase() === body.email.toLowerCase() && u.password === body.password
    );

    if (!user) {
      const error: ApiError = {
        success: false,
        error: 'Invalid email or password',
        code: 'INVALID_CREDENTIALS',
      };
      return NextResponse.json(error, { status: 401 });
    }

    // In production, you would:
    // 1. Generate JWT token
    // 2. Create session in database
    // 3. Set secure HTTP-only cookie
    // 4. Log authentication event

    console.log('🔐 User signed in:', {
      userId: user.id,
      email: user.email,
      rememberMe: body.rememberMe,
      timestamp: new Date().toISOString(),
    });

    const response: SignInResponse = {
      success: true,
      message: 'Sign in successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };

    return NextResponse.json(response);
  } catch {
    const error: ApiError = {
      success: false,
      error: 'Failed to process sign in request',
      code: 'SERVER_ERROR',
    };
    return NextResponse.json(error, { status: 500 });
  }
}
