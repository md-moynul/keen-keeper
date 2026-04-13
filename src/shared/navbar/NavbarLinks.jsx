import React from 'react';
import { NavLink } from 'react-router';

const NavbarLinks = ({children , to ,icon}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive}) => `flex items-center justify-center btn ${isActive ? 'bg-[#244D3F] text-white' : 'bg-base-100 '}`}>{icon} {children}</NavLink>
        </div>
    );
};

export default NavbarLinks;