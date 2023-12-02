import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";

export const DELETE = async (req: NextRequest) => {
    const id = req.url.split('/api/edit/')[1]
    const res = await db.delivery.delete(
        {
            where:{
                id:Number(id)
            }
        }
    )

    return NextResponse.json(res);
}



export const PUT = async (req:NextRequest) => {

    const id = req.url.split('/api/edit/')[1]
    const r:any = await req.json()
    const res = await db.delivery.update({
        where: {
            id: Number(id)
        },
        data: {
            cash:r['body']
        }
    })

    return NextResponse.json(res);
}