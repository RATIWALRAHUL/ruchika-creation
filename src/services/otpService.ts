export interface RequestOtpResponse {
  success: boolean;
  message?: string;
  mobile?: string;
  debugOtp?: string;
  error?: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message?: string;
  customer?: {
    id: string;
    name: string;
    mobile: string;
    mobileVerified: boolean;
    createdAt: string;
  };
  error?: string;
}

/**
 * Client service to request OTP from the backend
 */
export async function requestOtp(
  mobile: string,
  name?: string
): Promise<RequestOtpResponse> {
  try {
    const res = await fetch("/api/auth/otp/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, name }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("requestOtp network error:", err);
    return {
      success: false,
      error: "Unable to reach verification service. Please check your connection.",
    };
  }
}

/**
 * Client service to verify 4-digit OTP from the backend
 */
export async function verifyOtp(
  mobile: string,
  otp: string,
  name?: string
): Promise<VerifyOtpResponse> {
  try {
    const res = await fetch("/api/auth/otp/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, otp, name }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("verifyOtp network error:", err);
    return {
      success: false,
      error: "Verification failed due to a network error. Please try again.",
    };
  }
}
