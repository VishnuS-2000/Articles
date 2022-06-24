import NextAuth from "next-auth/next";
import CredentialsProvider  from 'next-auth/providers/credentials';
import axios from 'axios'

export default NextAuth({

    site:'http://localhost:3001',
    providers:[
        CredentialsProvider({
            async authorize(credentials,req){
                
                try{
                    const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/login`,{
                        username:credentials.username,
                        password:credentials.password
                    })

                    if(response.data.user){
                        return response.data.user
                    }
                }
                catch(err){
                    throw new Error(err)
                }
            }
        })
    ],
    pages:{
        signIn:'/admin/login'
    },
    secret:process.env.AUTH_SECRET,
    callbacks:{
        async jwt({token,user}){
            // console.log(token,user)
            if(user){
                token.user=user;
                token.accessToken=user.data.token,
                token.expiresIn=user.data.expires
            }
            return token
        },
        async session({session,token}){
            session.accessToken=token.accessToken
            session.expires=token.expiresIn
            return session
        }
    }



})