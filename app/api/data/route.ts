import {NextResponse} from "next/server";
import {Person} from "@/store/store";
import {db} from "@/lib/db";


export const POST = async (request: Request) => {
    const body: Person = await request.json();

    const newPerson = await db.delivery.create({
        data: {
            name: body.name,
            phone: body.phone,
            time: body.time,
            cash: body.cash,
            created: body.created

        }
    });
    return NextResponse.json({newPerson});
}


export const GET = async () => {
    const date = new Date().toLocaleDateString()
    const res = await db.delivery.findMany({
        where:{
            created: date
        }
    })
    return NextResponse.json(res);
}


export const PUT = async () => {
    const res = await db.finance.update({
        where: {
            id: 1
        },data:{
            balance:0
        }
    })
    return NextResponse.json(res);

}