import { NextRequest, NextResponse } from 'next/server';
import type { NewsletterRequest, NewsletterResponse, ApiError } from '@/lib/types';

// Mock subscriber database
const subscribers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterRequest = await request.json();

    // Validate email
    if (!body.email) {
      const error: ApiError = {
        success: false,
        error: 'Email is required',
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

    const normalizedEmail = body.email.toLowerCase();

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Check if already subscribed
    if (subscribers.has(normalizedEmail)) {
      const response: NewsletterResponse = {
        success: true,
        message: 'You are already subscribed to our newsletter!',
        alreadySubscribed: true,
      };
      return NextResponse.json(response);
    }

    // Add to subscribers
    subscribers.add(normalizedEmail);

    // In production, you would:
    // 1. Save to database
    // 2. Add to email marketing platform (Mailchimp, ConvertKit, etc.)
    // 3. Send welcome email
    // 4. Track subscription event

    console.log('📬 New newsletter subscriber:', {
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
    });

    const response: NewsletterResponse = {
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      alreadySubscribed: false,
    };

    return NextResponse.json(response, { status: 201 });
  } catch {
    const error: ApiError = {
      success: false,
      error: 'Failed to process subscription',
      code: 'SERVER_ERROR',
    };
    return NextResponse.json(error, { status: 500 });
  }
}
