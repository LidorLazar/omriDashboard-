import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {db} from "@/lib/db";




const handler = NextAuth({
    providers:[CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: {} ,
            password: {},
        },
        async authorize(credentials, req) {
            try{
                const response = await db.user.findFirst({
                    where:{
                        username:credentials?.username,
                        password: credentials?.password
                    },
                })
                console.log(credentials)
            }catch (e){
                console.log(e)
            }

            return null
        }
    })]
})

export {handler as GET, handler as POST};