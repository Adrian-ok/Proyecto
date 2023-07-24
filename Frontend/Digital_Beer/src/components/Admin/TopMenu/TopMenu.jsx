import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { useAuth } from '../../../hooks'

export function TopMenu() {
    
    const { auth, logout } = useAuth()

    const renderName = () => {
        if(auth.me?.firstName && auth.me?.lastName){
            return `${auth.me.firstName} ${auth.me.lastName}`
        }
        else {
            return auth.me?.email
        }
    }
    
    return (
        <Navbar fluid rounded className='bg-stone-200'>
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
                <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
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
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active href="#"><p>Home</p></Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


