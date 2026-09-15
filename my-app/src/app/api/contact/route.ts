import { NextRequest, NextResponse } from "next/server";
import {
  createContactMessage,
  getAllContactMessages,
  CreateContactDTO,
} from "@/services/contactService";

/**
 * POST /api/contact
 * Handles contact form submissions and saves them to MongoDB
 */
export async function POST(request: NextRequest) {
  try {
    const body: CreateContactDTO = await request.json();

    const result = await createContactMessage(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Failed to process contact inquiry",
          error: result.error,
        },
        { status: result.message === "Validation failed" ? 400 : 500 }
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
    console.error("❌ Error in POST /api/contact:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Retrieves latest contact messages (can be secured or used for admin checks)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50", 10);

    const result = await getAllContactMessages(limit);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      totalCount: result.totalCount,
      data: result.data,
    });
  } catch (error: unknown) {
    console.error("❌ Error in GET /api/contact:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
