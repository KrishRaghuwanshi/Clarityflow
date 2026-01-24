import { NextRequest, NextResponse } from 'next/server';
import type { JobApplicationRequest, JobApplicationResponse, ApiError } from '@/lib/types';

// Generate a unique application ID
function generateApplicationId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 6);
  return `APP-${timestamp}-${randomStr}`.toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const body: JobApplicationRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.positionId || !body.positionTitle) {
      const error: ApiError = {
        success: false,
        error: 'Missing required fields: name, email, positionId, and positionTitle are required',
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
    // 1. Save to database or ATS (Greenhouse, Lever, etc.)
    // 2. Upload resume to cloud storage
    // 3. Send confirmation email
    // 4. Notify hiring team

    console.log('💼 New job application:', {
      name: body.name,
      email: body.email,
      positionId: body.positionId,
      positionTitle: body.positionTitle,
      linkedIn: body.linkedIn,
      hasResume: !!body.resumeUrl,
      hasCoverLetter: !!body.coverLetter,
      timestamp: new Date().toISOString(),
    });

    const response: JobApplicationResponse = {
      success: true,
      applicationId: generateApplicationId(),
      message:
        'Application submitted successfully! We will review your application and get back to you soon.',
    };

    return NextResponse.json(response, { status: 201 });
  } catch {
    const error: ApiError = {
      success: false,
      error: 'Failed to process application',
      code: 'SERVER_ERROR',
    };
    return NextResponse.json(error, { status: 500 });
  }
}
