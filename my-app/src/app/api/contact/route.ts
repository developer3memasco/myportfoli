import { NextRequest, NextResponse } from "next/server";
import {
  createContactMessage,
  getAllContactMessages,
  CreateContactDTO,
} from "@/services/contactService";

export const dynamic = "force-static";

/**
 * POST /api/contact
 * Handles new contact inquiry submissions
 */
export async function POST(req: NextRequest) {
  try {
    const body: CreateContactDTO = await req.json();

    const result = await createContactMessage(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message,
          error: result.error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: result.message,
        data: result.data,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("API /api/contact error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to process contact submission",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Retrieves recent contact inquiries (e.g. for dashboard or verification)
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam, 10) : 50;

    const result = await getAllContactMessages(limit);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
