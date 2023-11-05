import supabase from '../../lib/supabase'

export async function GET() {
  const { data, error } = await supabase.from('merch').select('*')
  if (error)
    return Response.json({ error, message: 'Something went wrong', data: [] })
  return Response.json({ data })
}
