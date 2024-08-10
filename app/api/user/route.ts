import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const client = new PrismaClient();
export function GET(){
    return Response.json({
        email: 'sam',
        name: 'sam1'
    })
}



export async function POST(req: NextRequest){
    const body = await req.json();
    client.student.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    return Response.json({
       message: 'You are logged in'
    })
}


