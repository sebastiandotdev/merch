import { graphql } from '@/utils/shopify'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  type Query = {
    query: string
    variable: Record<string, unknown>
  }

  const { query, variable }: Query = await req.json()
  const data = await graphql(query, variable)

  return NextResponse.json(data)
}
