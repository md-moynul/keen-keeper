import React from 'react';

const StatusSection = () => {
    const status = [
        {number: '10' , string : 'Total Friends'},
        {number: '3' , string : 'On Track'},
        {number: '5' , string : 'Need Attention'},
        {number: '12' , string : 'Interactions This Month'},
    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center container mx-auto'>
            {status.map( (e,i) => <div className='p-8 space-y-2 bg-base-100 rounded-2xl' key={i}><h3 className="text-3xl font-semibold text-[#244D3F]">{e.number}</h3> <p className='text-[18px] text-gray-400'>{e.string}</p></div>)}
        </div>
    );
};

export default StatusSection;