'use client'

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function PaypalButton() {
  return (
    <PayPalScriptProvider options={{ clientId: 'test' }}>
      <PayPalButtons style={{ color: 'blue', layout: 'horizontal' }} />
    </PayPalScriptProvider>
  )
}
