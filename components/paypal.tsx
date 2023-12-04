'use client'

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function PaypalButton() {
  const CLIENT_ID =
    'AffSooJkvii99I2g7G9uf0_ywMzRLR256NWuRvtFhHIfcu7C-13gHc1DtvuV0eswtDJHKvYRsPf1URwE'

  const handleCreateOrderForPaypal = async () => {
    const response = await fetch('/server/checkout', { method: 'POST' })
    if (!response.ok) {
      console.error('Error fetching data')
      return null
    }

    const order = await response.json()

    if (!order || typeof order !== 'object') {
      console.error('Invalid JSON response')
      return null
    }

    return order.id
  }
  return (
    <PayPalScriptProvider options={{ clientId: CLIENT_ID }}>
      <PayPalButtons
        style={{ color: 'gold', layout: 'horizontal' }}
        createOrder={handleCreateOrderForPaypal}
        onApprove={async (data, actions) => {
          console.log(data)
          await actions.order?.capture()
        }}
        onCancel={(data) => {
          console.log('Order cancel for: ', data)
        }}
      />
    </PayPalScriptProvider>
  )
}
