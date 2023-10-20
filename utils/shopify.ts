/**The GraphQL Shopify */

const NAME_SHOPIFY = process.env.SHOPIFY_SHOP
const TOKEN_SHOPIFY = process.env.SHOPIFY_ACCESS_TOKEN

if (NAME_SHOPIFY === undefined || TOKEN_SHOPIFY === undefined) {
  throw new Error('env `SHOPIFY_SHOP` and `SHOPIFY_ACCESS_TOKEN` must be set')
}

export async function graphql<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  const res = await fetch(
    `https://${NAME_SHOPIFY}.myshopify.com/admin/api/2023-10/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': TOKEN_SHOPIFY!,
      },
      body: JSON.stringify({ query, variables }),
    },
  )

  if (!res.ok) {
    const body = res.text()
    throw new Error(`Shopify request failed: ${res.status} ${body}`)
  }

  const json = await res.json()
  if (json.errors) {
    throw new Error(json.errors.map((e: Error) => e.message).join('\n'))
  }
  return json.data as T
}
