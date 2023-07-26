import React from 'react'
import { LoginForm } from '../../../components/Admin'

export function LoginAdmin() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-300 dark:bg-slate-800 dark:text-white'>
      <LoginForm/>
    </div>
  )
}
