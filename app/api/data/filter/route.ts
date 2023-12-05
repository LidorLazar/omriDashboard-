
import {db} from "@/lib/db";
import {NextResponse} from "next/server";

export default async function GET() {
    // Your database query logic here
    const data = await db.delivery.findMany();
    NextResponse.json(data)
}