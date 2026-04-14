import logo from '../../../assets/images/logo.png'
import { useState } from 'react';
import { RiHome2Line, RiMenuFill } from 'react-icons/ri';
import NavbarLinks from './NavbarLinks';
import { IoTimeOutline } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';


const Navbar = () => {
    const [status, setStatus] = useState(false)
    const links = [
        { to: '/', children: 'Home', icon: <RiHome2Line /> },
        { to: '/timeline', children: 'Timeline', icon: <IoTimeOutline /> },
        { to: '/stats', children: 'Stats', icon: <GoGraph /> },
    ]
    const newLink = <>
        {links.map((e, i) => <NavbarLinks key={i} icon={e.icon} to={e.to}>{e.children}</NavbarLinks>)}
    </>
    return (
        <div className='bg-base-100 shadow'>
            <div className='flex justify-between container mx-auto py-4 items-center px-5 md:px-0'>
                <div><img src={logo} alt="" /></div>
                <div>
                    <div className='hidden md:flex space-x-2'>
                        {newLink}

                    </div>
                    <div className='grid md:hidden'>
                        <div onClick={() => setStatus(!status)}>
                            {status ? 'X' : <RiMenuFill className='' />}
                        </div>

                    </div>
                    <div className={`z-10 space-y-1 md:hidden bg-base-200 p-3 absolute duration-1000 ${status ? 'top-10 right-0 ' : '-top-50 right-0'}`}>
                        {newLink}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;