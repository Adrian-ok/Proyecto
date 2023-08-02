import React, { useEffect, useState } from 'react'
import { useUser } from '../../hooks'
import { HeaderPage, TableUsers } from '../../components/Admin'
import { AddEditUserForm } from '../../components/Admin'
import { ModalBasic } from '../../components/Common'
import { Spinner } from 'flowbite-react'

export function UsersAdmin() {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState(null)
    const [component, setComponent] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const { loading, users, getUsers, deleteUser } = useUser()

    useEffect(() => getUsers, [refresh])
    const onRefresh = () => setRefresh((prev) => !prev)
    const showOrHide = () => setShow((prevState) => !prevState)

    const AddUser = () => {
        setTitle('Add User')
        setComponent(<AddEditUserForm onHide={showOrHide} onRefresh={onRefresh}/>)
        showOrHide()
    }

    const updateUser = (data) => {
        console.log(data)
        setTitle('Edit User')
        setComponent(<AddEditUserForm user={data} onHide={showOrHide} onRefresh={onRefresh}/>)
        showOrHide()
    }

    const deleteUse = (data) => {
        const result = window.confirm(`Delete user: ${data.username}`)
        if(result) {
            deleteUser(data.id)
            onRefresh()
        }
    }

//   const loading = true

    return (
        <div className='h-full'>
            <HeaderPage title={'Users'} btnTitle={'Nuevo'} btnClick={AddUser}/>

            {loading ? (
                <div className='flex flex-col h-full items-center gap-4 text-lg font-semibold'>
                    <Spinner
                        size="xl"
                        color='warning'
                    />
                    <p>Cargando...</p>
                </div>
            ) : (
                <TableUsers users={users} update={updateUser} deleteU={deleteUse}/>
            )}

            <ModalBasic show={show} showOrHide={showOrHide} title={title} children={component} onRefresh={onRefresh}/>
        </div>
    )
}
