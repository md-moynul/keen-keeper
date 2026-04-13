import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const HomePageHeading = () => {
    return (
        <div className='container mx-auto text-center space-y-8'>
            <div className='space-y-4'>
                <h1 className='font-bold text-3xl md:text-5xl'>Friends to keep close in your life</h1>
                <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />
                    relationships that matter most.</p>
            </div>
            <button className="btn bg-[#244D3F] text-white "><IoMdAdd color='white' />Add a Friend</button>
        </div>
    );
};

export default HomePageHeading;