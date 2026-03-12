import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = await fetch(
      "https://hosting-management-nine.vercel.app/api/get-website-status",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: "https://dorotheajaipur.in",
        }),
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to check website status" },
      { status: 500 }
    );
  }
}
