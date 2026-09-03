import { NextResponse } from "next/server";

// In-memory OTP session cache (keyed by normalized mobile)
interface OtpEntry {
  otp: string;
  name?: string;
  expiresAt: number;
  resendAfter: number;
}

// Global store across hot-reloads
declare global {
  // eslint-disable-next-line no-var
  var __rc_otp_store: Map<string, OtpEntry> | undefined;
}

const otpStore = globalThis.__rc_otp_store || new Map<string, OtpEntry>();
globalThis.__rc_otp_store = otpStore;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mobile, name } = body;

    if (!mobile) {
      return NextResponse.json(
        { success: false, error: "Mobile number is required" },
        { status: 400 }
      );
    }

    // Clean mobile number (keep digits only)
    const cleanMobile = mobile.replace(/\D/g, "");
    if (cleanMobile.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number" },
        { status: 400 }
      );
    }

    const now = Date.now();
    const existing = otpStore.get(cleanMobile);

    // Cooldown check (30 seconds)
    if (existing && existing.resendAfter > now) {
      const waitSec = Math.ceil((existing.resendAfter - now) / 1000);
      return NextResponse.json(
        {
          success: false,
          error: `Please wait ${waitSec}s before requesting a new OTP.`,
        },
        { status: 429 }
      );
    }

    // Generate 4-digit numeric code
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

    // Store with 5-minute expiry and 30-second cooldown
    otpStore.set(cleanMobile, {
      otp: generatedOtp,
      name: name?.trim(),
      expiresAt: now + 5 * 60 * 1000,
      resendAfter: now + 30 * 1000,
    });

    console.log(`[Ruchika OTP] Code for +91 ${cleanMobile.slice(-10)}: ${generatedOtp}`);

    return NextResponse.json({
      success: true,
      message: `OTP sent successfully to +91 ${cleanMobile.slice(-10)}`,
      mobile: cleanMobile,
      // debugOtp provided for preview & testing environments
      debugOtp: generatedOtp,
    });
  } catch (error) {
    console.error("OTP request error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate OTP. Please try again." },
      { status: 500 }
    );
  }
}
