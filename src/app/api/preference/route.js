import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export const GET = (req, res) => {
  let header = headers();
  let cookie = header.get("theme");

  return NextResponse.json({
    user: { name: "anis", id: "34dd4" },

    theme: cookie,
  });
};
