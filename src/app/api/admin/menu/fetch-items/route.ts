import dbConnect from "@/lib/dbConnect";
import ItemModel from "@/model/Item";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const foodItems = await ItemModel.find();

    return NextResponse.json(foodItems);
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}
