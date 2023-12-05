import {db} from "@/lib/db";
import {NextResponse} from "next/server";



export const GET = async () => {
    const res = await db.delivery.findMany()
    return NextResponse.json(res);
}