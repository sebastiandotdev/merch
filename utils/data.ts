import useSWR, { mutate } from 'swr'
import { Image, Money } from './types'

export interface CartData {
  id: string
  lines: {
    nodes: {
      id: string
      quantity: number
      merchandise: {
        product: {
          title: string
        }
        title: string
        image: Image
      }
      estimatedCost: {
        totalAmount: Money
      }
    }[]
  }
  checkoutUrl: string
  estimatedCost: {
    totalAmount: Money
  }
}

const CART_QUERY = `{
    id
    lines(first: 100) {
      nodes {
        id
        quantity
        merchandise {
          ...on ProductVariant {
            title
            image {
              url
              altText
            }
            product {
              title
            }
          }
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
    checkoutUrl
    estimatedCost {
      totalAmount {
        amount
        currencyCode
      }
    }
  }`

async function shopifyGraphql<T = any>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const res = await fetch('/api/shopify', {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
  })
  return await res.json()
}

async function cartFetcher(): Promise<CartData> {
  const id = localStorage.getItem('cartId')
  if (id === null) {
    const { cartCreate } = await shopifyGraphql<{
      cartCreate: { cart: CartData }
    }>(`mutation { cartCreate { cart ${CART_QUERY} } }`)
    localStorage.setItem('cartId', cartCreate.cart.id)
    return cartCreate.cart
  }

  const { cart } = await shopifyGraphql(
    `query($id: ID!) { cart(id: $id) ${CART_QUERY} }`,
    { id },
  )
  if (cart === null) {
    // If there is a cart ID, but the returned cart is null, then the cart
    // was already part of a completed order. Clear the cart ID and get a new
    // one.
    localStorage.removeItem('cartId')
    return cartFetcher()
  }

  return cart
}
export function useCart() {
  return useSWR<CartData, Error>('cart', cartFetcher, {})
}

const ADD_TO_CART_QUERY = `mutation add($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart ${CART_QUERY}
  }
}`
