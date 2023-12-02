import {db} from "@/lib/db";
import {NextResponse} from "next/server";


export const GET = async (req: Request) => {
    const data:any = await req.json()
    const res = await db.delivery.findMany({
        where:{
            name: data['body']
        }
    })
    return NextResponse.json(res);
}