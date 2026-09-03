import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: sales } = await supabase.from('sales').select()

  return (
    <ul>
      {sales?.map((sale) => (
        <li key={sale.id}>{sale.date}, {sale.degC}</li>
      ))}
    </ul>
  )
}