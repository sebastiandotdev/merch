// @ts-nocheck

import { NextResponse } from 'next/server'
import paypal from '@paypal/checkout-server-sdk'

const key = process.env.NEXT_PUBLIC_PAYPAL_SECRET_KEY ?? ''
const client =
  'AffSooJkvii99I2g7G9uf0_ywMzRLR256NWuRvtFhHIfcu7C-13gHc1DtvuV0eswtDJHKvYRsPf1URwE'

const env = new paypal.core.SandboxEnvironment(client, key)
const ui = new paypal.core.PayPalHttpClient(env)

export async function POST() {
  const request = new paypal.orders.OrdersCreateRequest()

  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: '10.00',
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: '10.00',
            },
          },
        },
        items: [
          {
            name: 'Example paypal',
            category: 'DONATION',
            unit_amount: { currency_code: 'USD', value: '10.00' },
            quantity: '1',
          },
        ],
      },
    ],
  })

  const response = await ui.execute(request)

  return NextResponse.json({
    id: response.result.id,
  })
}
