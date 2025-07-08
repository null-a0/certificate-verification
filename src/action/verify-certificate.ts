"use server";

import { TYPE } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface VerifyCertificateResponse {
  success: boolean;
  message: string;
  data: {
    certificate_id: string;
    name: string;
    position: string;
    duration: string;
    roll_number: string;
    type: TYPE; // Assuming type is a string, adjust if it's an enum
    team_name: string;
  } | null;
}

export const veryfyCertificate = async (
  certificate_id: string
): Promise<VerifyCertificateResponse> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        certificate_id,
      },
      select: {
        certificate_id: true,
        name: true,
        position: true,
        duration: true,
        roll_number: true,
        team_name: true,
        type: true,
      },
    });
    if (!user) {
      return {
        success: false,
        message: "Certificate not found or invalid.",
        data: null,
      };
    }

    return {
      success: true,
      data: user,
      message: "Certificate verified successfully.",
    };
  } catch (error) {
    console.error("Error verifying certificate:", error);
    return {
      success: false,
      message: "An error occurred while verifying the certificate.",
      data: null,
    };
  }
};
