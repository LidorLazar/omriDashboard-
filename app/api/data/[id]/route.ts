import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";


export const PUT = async (req:NextRequest) => {

    const id = req.url.split('/api/data/')[1]
    const res = await db.person.update({
        where: {
            id: Number(id)
        },
        data: {
            getMoney: true
        }
    })

    return NextResponse.json(res);
}

export const GET = async (req: NextRequest) => {

    const id = req.url.split('/api/data/')[1]

    const res = await db.person.findUnique(
        {
            where:{
                id:Number(id)
            }
        }
    )

    return NextResponse.json(res);
}
