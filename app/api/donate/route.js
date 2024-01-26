import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

export const POST = async (request) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const reqBody = await request.json();
    const { items, email } = reqBody;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: 2 * 100,
          product_data: {
            name: "Donation",
          },
        },
      }],
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: {
        email,
      },
    });

    console.log(session);

    return NextResponse.json({
      message: "Connection is Active!",
      success: true,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message || "Unknown error" });
  }
};
