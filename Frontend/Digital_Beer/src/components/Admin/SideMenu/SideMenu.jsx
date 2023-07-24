import React from 'react'

export function SideMenu({ children }) {
    return (
        <div className='flex flex-row h-screen'>
            <Menu2 />
            <div>{children}</div>
        </div>
    )
}


'use client';

import { Badge, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function Menu2() {
    return (
        <Sidebar>
            <Sidebar.Items className='mt-12'>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        <p>Dashboard</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        <p>Kanban</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        <p>Inbox</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        <p>Users</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        <p>Products</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiArrowSmRight}>
                        <p>Sign In</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                        <p>Sign Up</p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}





