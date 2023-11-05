import { createClient } from '@supabase/supabase-js'

const KEY = process.env.SUPABASE_PROJECT_KEY ?? ''
const URL = process.env.SUPABASE_PROJECT_URL ?? ''

const supabase = createClient(URL, KEY)

export default supabase
