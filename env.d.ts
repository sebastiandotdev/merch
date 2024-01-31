declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      NEXT_PUBLIC_PAYPAL_SECRET_KEY: string
    }
  }
}
