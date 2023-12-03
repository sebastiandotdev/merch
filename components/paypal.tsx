'use client'

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function PaypalButton() {
  const CLIENT_ID =
    'AffSooJkvii99I2g7G9uf0_ywMzRLR256NWuRvtFhHIfcu7C-13gHc1DtvuV0eswtDJHKvYRsPf1URwE'

  const handleCreateOrderForPaypal = async () => {
    const response = await fetch('/server/checkout', { method: 'POST' })

    // Check if the response is empty
    if (!response.ok) {
      console.error('Error fetching data')
      return null
    }

    const order = await response.json()

    // Check if the parsed JSON is valid
    if (!order || typeof order !== 'object') {
      console.error('Invalid JSON response')
      return null
    }

    console.log(order)
    return order.id
  }

  return (
    <PayPalScriptProvider options={{ clientId: CLIENT_ID }}>
      <PayPalButtons
        style={{ color: 'blue', layout: 'horizontal' }}
        createOrder={handleCreateOrderForPaypal}
      />
    </PayPalScriptProvider>
  )
}
