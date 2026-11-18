import { redirect } from 'next/navigation'
import { LoginScreen } from '@/components/login-screen'
import { createClient } from '@/lib/supabase/server'

export default async function LoginPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) redirect('/')
  return <LoginScreen />
}
