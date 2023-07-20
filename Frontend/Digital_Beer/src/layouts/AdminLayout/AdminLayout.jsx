import React from 'react'
import { LoginAdmin } from '../../pages/Admin'

export function AdminLayout(props) {

  const {children} = props

  const auth = null

  if(!auth) return <LoginAdmin/>

  return (
    <div>
      <p>Admin Layout</p>
      {children}
    </div>
  )
}
