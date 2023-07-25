import React from 'react'
import { LoginAdmin } from '../../pages/Admin'
import { TopMenu, SideMenu } from '../../components/Admin'
import { useAuth } from '../../hooks'

export function AdminLayout(props) {

  const { children } = props
  const { auth } = useAuth()

  if (!auth) return <LoginAdmin />

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <TopMenu />
      </div>

      <div className='flex flex-1'>
        <SideMenu>{children}</SideMenu>
      </div>
    </div>
  )
}
