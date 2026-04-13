import React from 'react';
import HomePageHeading from './HomePageHeading';
import StatusSection from './StatusSection';

const Home = () => {
    return (
    <div className='bg-base-200'>
        <div className=' py-10 px-4 md:px-0 md:py-20 space-y-10'>
            <HomePageHeading />
            <StatusSection/>
        </div>
    </div>
    );
};

export default Home;