import React, { useEffect } from 'react'
import { useUser } from '../../hooks'
import { HeaderPage } from '../../components/Admin'

export function UsersAdmin() {

    const { loading, users, getUsers } = useUser()

    useEffect(() => getUsers, [])

    return (
        <div className='w-full'>
            <HeaderPage title={'Users'} />

            Users admin
        </div>
    )
}
