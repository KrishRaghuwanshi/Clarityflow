import { NextRequest, NextResponse } from 'next/server';
import type { CheckoutRequest, CheckoutResponse, ApiError } from '@/lib/types';

// Pricing plans configuration
const plans = {
  Starter: { monthly: 49, annual: 39 },
  Growth: { monthly: 149, annual: 119 },
  Team: { monthly: 399, annual: 319 },
};

// Generate a mock checkout session ID
function generateSessionId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 10);
  return `cs_${timestamp}_${randomStr}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();

    // Validate required fields
    if (!body.planName || !body.billingCycle) {
      const error: ApiError = {
        success: false,
        error: 'Missing required fields: planName and billingCycle are required',
        code: 'VALIDATION_ERROR',
      };
      return NextResponse.json(error, { status: 400 });
    }

    // Validate plan name
    if (!['Starter', 'Growth', 'Team'].includes(body.planName)) {
      const error: ApiError = {
        success: false,
        error: 'Invalid plan name. Must be Starter, Growth, or Team',
        code: 'INVALID_PLAN',
      };
      return NextResponse.json(error, { status: 400 });
    }

    // Validate billing cycle
    if (!['monthly', 'annual'].includes(body.billingCycle)) {
      const error: ApiError = {
        success: false,
        error: 'Invalid billing cycle. Must be monthly or annual',
        code: 'INVALID_BILLING_CYCLE',
      };
      return NextResponse.json(error, { status: 400 });
    }

    // Calculate price
    const plan = plans[body.planName as keyof typeof plans];
    const price = body.billingCycle === 'annual' ? plan.annual : plan.monthly;

    // Simulate Stripe session creation delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    // In production with Stripe, you would:
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: [{
    //     price_data: {
    //       currency: 'usd',
    //       product_data: { name: `Clarityflow ${body.planName}` },
    //       unit_amount: price * 100,
    //       recurring: { interval: body.billingCycle === 'annual' ? 'year' : 'month' },
    //     },
    //     quantity: 1,
    //   }],
    //   mode: 'subscription',
    //   success_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    // });

    const sessionId = generateSessionId();

    console.log('💳 Checkout session created:', {
      sessionId,
      planName: body.planName,
      billingCycle: body.billingCycle,
      price: `$${price}/mo`,
      email: body.email,
      timestamp: new Date().toISOString(),
    });

    const response: CheckoutResponse = {
      success: true,
      sessionId,
      // In production, this would be the Stripe checkout URL
      checkoutUrl: `/checkout/mock?session=${sessionId}&plan=${body.planName}&billing=${body.billingCycle}&price=${price}`,
    };

    return NextResponse.json(response, { status: 201 });
  } catch {
    const error: ApiError = {
      success: false,
      error: 'Failed to create checkout session',
      code: 'SERVER_ERROR',
    };
    return NextResponse.json(error, { status: 500 });
  }
}
