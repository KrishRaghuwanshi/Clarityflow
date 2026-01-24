import { NextRequest, NextResponse } from 'next/server';
import type { ContactRequest, ContactResponse, ApiError } from '@/lib/types';

// Generate a unique ticket ID
function generateTicketId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 6);
  return `TKT-${timestamp}-${randomStr}`.toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.subject || !body.message) {
      const error: ApiError = {
        success: false,
        error: 'Missing required fields: name, email, company, subject, and message are required',
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
    // 1. Save to database/CRM
    // 2. Send confirmation email to user
    // 3. Create support ticket
    // 4. Notify sales/support team via Slack

    console.log('📧 New contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    const response: ContactResponse = {
      success: true,
      ticketId: generateTicketId(),
      message: 'Your message has been received. Our team will respond within one business day.',
    };

    return NextResponse.json(response, { status: 201 });
  } catch {
    const error: ApiError = {
      success: false,
      error: 'Failed to process contact request',
      code: 'SERVER_ERROR',
    };
    return NextResponse.json(error, { status: 500 });
  }
}
