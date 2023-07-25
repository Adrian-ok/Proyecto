import { Dropdown, Navbar, Avatar, DarkThemeToggle } from 'flowbite-react';
import { useAuth, useDarkMode } from '../../../hooks'
import { HiMoon, HiSun } from 'react-icons/hi'

export function TopMenu() {

    const { auth, logout } = useAuth()
    const { theme, setTheme } = useDarkMode()

    const changeTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const renderName = () => {
        if (auth.me?.firstName && auth.me?.lastName) {
            return `${auth.me.firstName} ${auth.me.lastName}`
        }
        else {
            return auth.me?.email
        }
    }

    return (
        <Navbar fluid className='bg-stone-200'>
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/cheers.png"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Digital Beer
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {theme === 'dark' ? 
                    (<DarkThemeToggle onClick={() => changeTheme()} iconLight={HiSun} className='mr-8'/>) : 
                    (<DarkThemeToggle onClick={() => changeTheme()} iconDark={HiMoon} className='mr-8'/>
                )}
                <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"/>}
                >
                    <Dropdown.Header>
                        <span className="block truncate text-sm font-medium">{renderName()}</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                </Dropdown>
            </div>
        </Navbar>
    )
}


