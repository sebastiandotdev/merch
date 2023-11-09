import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const isAdmin = false
  if (isAdmin) {
    console.log('LOGIN')
  }
  return NextResponse.redirect('/login')
}

export const config = {
  matcher: ['/admin'],
}
