import { NextResponse } from "next/server";
import {Person} from "@/store/store";
import {db} from "@/lib/db";


export const POST = async (request: Request) =>{
    const body: Person = await request.json();

    const newPerson = await db.person.create({
        data:{
            name: body.name,
            phone: body.phone,
            time:body.time,
            cash: body.cash,

        }
    });
    return NextResponse.json({newPerson});
}


export const GET = async () =>{
    const res = await db.person.findMany()

    return NextResponse.json(res);
}


export const DELETE =  async () =>{
    const res = await db.person.deleteMany()

    return NextResponse.json(res);
}
