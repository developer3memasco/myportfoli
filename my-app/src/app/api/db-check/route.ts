import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

/**
 * GET /api/db-check
 * Tests and verifies connection to MongoDB database
 */
export async function GET() {
  try {
    const mongoose = await connectToDatabase();
    const readyState = mongoose.connection.readyState;

    const stateMap: Record<number, string> = {
      0: "Disconnected",
      1: "Connected",
      2: "Connecting",
      3: "Disconnecting",
    };

    if (readyState === 1) {
      return NextResponse.json(
        {
          success: true,
          message: "MongoDB connection is healthy and active.",
          database: mongoose.connection.name,
          host: mongoose.connection.host,
          readyState: stateMap[readyState] || "Unknown",
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: `MongoDB is in '${stateMap[readyState] || readyState}' state.`,
          readyState: stateMap[readyState] || "Unknown",
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }
  } catch (error: unknown) {
    console.error("❌ DB Check failed:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to MongoDB",
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
