import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../../hooks'

//SECCION 6 CAP 41
export function SideMenu({ children }) {

    const { pathname } = useLocation()
    const { auth } = useAuth()

    return (
        <div className='flex flex-row h-screen'>
            <Menu pathname={pathname} auth={auth} />
            <div className='w-full px-4'>{children}</div>
        </div>
    )
}

import { Sidebar } from 'flowbite-react';
import { HiHome, HiTag, HiShoppingBag, HiViewGrid, HiUserGroup } from 'react-icons/hi';
import { LuHistory } from "react-icons/lu";

function Menu(props) {

    const { pathname, auth } = props

    return (
        <Sidebar className='w-96'>
            <Sidebar.Items className='mt-12'>
                <Sidebar.ItemGroup>
                    <Sidebar.Item as={Link} to={'/admin'} active={pathname === '/admin'} icon={HiHome}>
                        <p>Orders</p>
                    </Sidebar.Item>
                    <Sidebar.Item as={Link} to={'/admin/tables'} active={pathname === '/admin/tables'} icon={HiViewGrid}>
                        <p>Tables</p>
                    </Sidebar.Item>
                    <Sidebar.Item as={Link} to={'/admin/categories'} active={pathname === '/admin/categories'} icon={HiTag}>
                        <p>Categories</p>
                    </Sidebar.Item>
                    <Sidebar.Item as={Link} to={'/admin/products'} active={pathname === '/admin/products'} icon={HiShoppingBag}>
                        <p>Products</p>
                    </Sidebar.Item>
                    <Sidebar.Item as={Link} to={'/admin/history-payments'} active={pathname === '/admin/history-payments'} icon={LuHistory}>
                        <p>History payments</p>
                    </Sidebar.Item>
                    {auth.me?.is_staff === true && (
                        <Sidebar.Item as={Link} to={'/admin/users'} active={pathname === '/admin/users'} icon={HiUserGroup}>
                            <p>Users</p>
                        </Sidebar.Item>
                    )}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}





