import React from 'react'

export function AdminLayout(props) {

  const {children} = props

  return (
    <div>
      <p>Admin Layout</p>
      {children}
    </div>
  )
}
