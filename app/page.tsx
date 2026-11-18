import { redirect } from 'next/navigation'
import { AerionApp } from '@/components/aerion-app'
import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  return <AerionApp userEmail={user.email ?? 'Researcher'} />
}
