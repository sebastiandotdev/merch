'use client'

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function PaypalButton() {
  const CLIENT_ID =
    'AffSooJkvii99I2g7G9uf0_ywMzRLR256NWuRvtFhHIfcu7C-13gHc1DtvuV0eswtDJHKvYRsPf1URwE'
  return (
    <PayPalScriptProvider options={{ clientId: CLIENT_ID }}>
      <PayPalButtons style={{ color: 'blue', layout: 'horizontal' }} />
    </PayPalScriptProvider>
  )
}
