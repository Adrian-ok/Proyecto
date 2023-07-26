import React, { useEffect, useState } from 'react'
import { useUser } from '../../hooks'
import { HeaderPage } from '../../components/Admin'
import { TableUsers } from '../../components/Admin'
import { ModalBasic } from '../../components/Common'
import { Spinner } from 'flowbite-react'

export function UsersAdmin() {
    const [show, setShow] = useState(false)
    const { loading, users, getUsers } = useUser()

    useEffect(() => getUsers, [])

    const showOrHide = () => setShow((prevState) => !prevState)

    return (
        <div className='h-full'>
            <HeaderPage title={'Users'} btnTitle={'Nuevo'} btnClick={showOrHide}/>

            {loading ? (
                <div className='flex flex-col h-full items-center gap-4 text-lg font-semibold'>
                    <Spinner
                        size="xl"
                        color='warning'
                    />
                    <p>Cargando...</p>
                </div>
            ) : (
                <TableUsers users={users} />
            )}

            <ModalBasic show={show} showOrHide={showOrHide} title={'Nuevo Usuario'} children={'contenido'}/>
        </div>
    )
}
