import React from 'react'
import { LoginAdmin } from '../../pages/Admin'
import { TopMenu, SideMenu } from '../../components/Admin'
import { useAuth } from '../../hooks'

export function AdminLayout(props) {

  const { children } = props
  const { auth } = useAuth()

  if (!auth) return <LoginAdmin />

  return (
    <div>
      <div>
        <TopMenu />
      </div>


      <SideMenu>{children}</SideMenu>

    </div>
  )
}
