import { NextRequest, NextResponse } from 'next/server';
import type { BookingRequest, BookingResponse, ApiError } from '@/lib/types';

// Generate a unique booking ID
function generateBookingId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `BK-${timestamp}-${randomStr}`.toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.company) {
      const error: ApiError = {
        success: false,
        error: 'Missing required fields: name, email, and company are required',
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

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Create calendar event
    // 4. Notify sales team

    console.log('📅 New demo booking:', {
      name: body.name,
      email: body.email,
      company: body.company,
      teamSize: body.teamSize,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    const response: BookingResponse = {
      success: true,
      bookingId: generateBookingId(),
      message: 'Demo booking received! Our team will reach out within 24 hours.',
    };

    return NextResponse.json(response, { status: 201 });
  } catch {
    const error: ApiError = {
      success: false,
      error: 'Failed to process booking request',
      code: 'SERVER_ERROR',
    };
    return NextResponse.json(error, { status: 500 });
  }
}
