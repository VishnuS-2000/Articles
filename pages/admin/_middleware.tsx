
import { getSession,useSession } from "next-auth/react"
import { NextResponse } from "next/server"

/** @param {import("next/server").NextRequest} req */

export async function middleware(req) {
  const session = await getSession({req})

  // console.log('middleware',session)
  if(!session){
      NextResponse.redirect('http://localhost:3000/login')
  }

  // If user is authenticated, continue.
  return NextResponse.next()
}