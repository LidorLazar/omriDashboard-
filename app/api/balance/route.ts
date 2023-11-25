import {db} from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";

export const GET = async () => {
    const res = await db.finance.findMany()

    return NextResponse.json(res);
}

export const PUT = async (req:NextRequest) => {
    const result:any = await req.json()
    const res = await db.finance.update({
        where: {
            id: 1
        },
        data: {
            balance: result['body']
        }
    })

    return NextResponse.json(res);
}

