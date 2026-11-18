'use client'

import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, LockKeyhole, ShieldCheck, Wifi } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export function LoginScreen() {
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setPending(true); setError('')
    const { error: authError } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
    if (authError) { setError(authError.message.toLowerCase().includes('confirm') ? 'Confirm your email address before signing in.' : authError.status === 429 ? 'Too many attempts. Wait a moment and try again.' : 'Invalid email or password.'); setPending(false); return }
    window.location.assign('/')
  }
  return <main className="login-shell"><section className="login-brand-panel"><a className="brand login-brand" href="#home"><span className="brand-mark">A</span><span className="brand-copy"><strong>AERION</strong><small>TECH OBSERVATORY</small></span></a><div className="login-statement"><div className="eyebrow"><span className="eyebrow-line" /> UGANDA · RESEARCH NETWORK</div><h1>Mapping Uganda&apos;s <span>digital landscape.</span></h1><p>A private research observatory for the people building a clearer picture of technology access and use.</p><div className="login-trust"><span><ShieldCheck size={16} /> PRIVATE BY DESIGN</span><i /><span><Wifi size={16} /> FIELD-READY</span></div></div><div className="login-coordinates">00° 19&apos; 00.0&quot; N <span>32° 35&apos; 00.0&quot; E</span></div><div className="login-map-graphic" aria-hidden="true"><div className="login-map-ring"/><div className="login-map-ring ring-two"/><div className="login-map-dot dot-one"/><div className="login-map-dot dot-two"/><div className="login-map-dot dot-three"/></div></section><section className="login-form-panel"><div className="login-form-wrap"><div className="login-mobile-brand"><span className="brand-mark">A</span><span className="brand-copy"><strong>AERION</strong><small>TECH OBSERVATORY</small></span></div><div className="login-lock"><LockKeyhole size={20} /></div><div className="eyebrow small-eyebrow">PRIVATE ACCESS ONLY</div><h2>Welcome back</h2><p className="login-subtitle">Sign in to your research workspace.</p><form onSubmit={submit} className="login-form"><label>Email address<input autoComplete="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@research.org" /></label><label>Password<span className="password-wrap"><input autoComplete="current-password" type={showPassword ? 'text' : 'password'} required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" /><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></span></label>{error && <p className="login-error" role="alert">{error}</p>}<button type="submit" className="button-primary login-submit" disabled={pending}>{pending ? 'Signing in…' : <>Sign in securely <ArrowRight size={16} /></>}</button></form><div className="login-security"><ShieldCheck size={16} /><span>Your account is protected with encrypted sign-in.</span></div><div className="login-no-signup">Access is managed by your observatory administrator.</div></div><footer className="login-footer"><span>© {new Date().getFullYear()} AERION Tech Observatory</span><span><span className="sync-dot" /> All systems operational</span></footer></section></main>
}
