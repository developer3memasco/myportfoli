import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-static";

export async function GET() {
  try {
    const mongoose = await connectToDatabase();
    const readyState = mongoose.connection.readyState;
    const states = ["disconnected", "connected", "connecting", "disconnecting"];

    return NextResponse.json({
      success: true,
      status: "connected",
      databaseState: states[readyState] || "unknown",
      databaseName: mongoose.connection.name,
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Database connection failed";
    console.error("❌ DB Check API Error:", error);

    return NextResponse.json(
      {
        success: false,
        status: "error",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
