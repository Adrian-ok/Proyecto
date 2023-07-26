import React from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../../hooks'
import { MENUS } from '../../../utils/constants'

//SECCION 6 CAP 41
export function SideMenu({ children }) {

    const { pathname } = useLocation()
    const { auth } = useAuth()

    return (
        <div className='flex h-screen w-full'>
            <Menu pathname={pathname} auth={auth} />

            <div className='w-full px-4'>{children}</div>
        </div>
    )
}

function Menu(props) {

    const { pathname, auth } = props

    return (
        < div className='bg-stone-300 w-72 px-4 dark:bg-gray-800 dark:text-white' >
            <div className='mt-4 flex flex-col gap-4 relative text-xl'>
                {MENUS?.map((menu, index) => (
                    <Link
                        to={menu.link}
                        className={pathname === menu.link ?
                        'text-gray-500 flex items-center gap-4 mt-6 dark:text-yellow-100' :
                        'flex items-center gap-4 mt-6'
                        }
                        key={index}
                    >
                        <div>{React.createElement(menu?.icon, { size: "24" })}</div>
                        <p>{menu.name}</p>
                    </Link>
                ))}
                {auth.me?.is_staff === true && (
                    <div 
                        className={pathname === '/admin/users' ? 
                        'text-gray-500 flex items-center gap-4 mt-6 dark:text-yellow-100' : 
                        'flex items-center gap-4 mt-6' 
                    }>
                        <HiUserGroup size={24}/>
                        <Link to={'/admin/users'}>Users</Link>
                    </div>
                )}
            </div>
        </div >
    )
}






