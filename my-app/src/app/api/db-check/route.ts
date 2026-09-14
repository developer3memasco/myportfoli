import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectToDatabase();
    const state = mongoose.connection.readyState;
    const stateMap: Record<number, string> = {
      0: "disconnected",
      1: "connected",
      2: "connecting",
      3: "disconnecting",
    };

    return NextResponse.json({
      success: true,
      status: stateMap[state] || "unknown",
      dbName: mongoose.connection.name,
      host: mongoose.connection.host,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown connection error";
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
