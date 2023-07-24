import React from 'react'
import { useAuth } from '../../hooks'

export function HomeAdmin() {
  
  const { logout } = useAuth()

  return (
    <div>
      <button onClick={() => logout()} className='bg-red-500 rounded p-1'>
        Logout
      </button>
    </div>
  )
}
