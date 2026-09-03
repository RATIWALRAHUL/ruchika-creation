import { NextResponse } from "next/server";

interface OtpEntry {
  otp: string;
  name?: string;
  expiresAt: number;
  resendAfter: number;
}

declare global {
  // eslint-disable-next-line no-var
  var __rc_otp_store: Map<string, OtpEntry> | undefined;
}

const otpStore = globalThis.__rc_otp_store || new Map<string, OtpEntry>();
globalThis.__rc_otp_store = otpStore;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mobile, otp, name } = body;

    if (!mobile || !otp) {
      return NextResponse.json(
        { success: false, error: "Mobile number and OTP are required" },
        { status: 400 }
      );
    }

    const cleanMobile = mobile.replace(/\D/g, "");
    const cleanOtp = otp.toString().trim();
    const now = Date.now();

    const record = otpStore.get(cleanMobile);

    if (!record) {
      return NextResponse.json(
        { success: false, error: "OTP expired or not found. Please request a new code." },
        { status: 400 }
      );
    }

    if (now > record.expiresAt) {
      otpStore.delete(cleanMobile);
      return NextResponse.json(
        { success: false, error: "OTP has expired. Please request a new code." },
        { status: 400 }
      );
    }

    if (record.otp !== cleanOtp) {
      return NextResponse.json(
        { success: false, error: "Incorrect 4-digit code. Please check and try again." },
        { status: 400 }
      );
    }

    // Success: remove verified OTP from store
    otpStore.delete(cleanMobile);

    const customerName = name?.trim() || record.name || "Valued Customer";
    const customer = {
      id: `RC_CUST_${Date.now()}`,
      name: customerName,
      mobile: cleanMobile.slice(-10),
      mobileVerified: true,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: "Mobile number verified successfully!",
      customer,
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { success: false, error: "Verification failed. Please try again." },
      { status: 500 }
    );
  }
}
