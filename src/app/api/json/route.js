import { NextResponse } from "next/server";

export const GET = (req, res) => {
  return NextResponse.json({
    message: "Welcome to our API!",

    version: "1.0",
  });
};
