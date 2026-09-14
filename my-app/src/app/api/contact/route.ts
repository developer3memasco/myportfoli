import { NextRequest, NextResponse } from "next/server";
import {
  createContactMessage,
  getAllContactMessages,
} from "@/services/contactService";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await createContactMessage(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || result.message },
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
    console.error("API /api/contact POST error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await getAllContactMessages();

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      totalMessages: result.totalCount,
      data: result.data,
      status: "Database active and connected",
    });
  } catch (error: unknown) {
    console.error("API /api/contact GET error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch status";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
