import { createClient } from '@supabase/supabase-js'

const KEY = process.env.SUPABASE_PROJECT_KEY
const URL = process.env.SUPABASE_PROJECT_URL

if (!KEY || !URL)
  throw new Error('Missing environment variable SUPABASE_PROJECT_KEY')

const supabase = createClient(URL, KEY)

export default supabase
