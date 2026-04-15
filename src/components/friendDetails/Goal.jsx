import React from 'react';

const Goal = ({goal}) => {
    return (
         <div className=' space-y-4 p-6 flex flex-col justify-center'>
                    <div className='flex justify-between  items-center'>
                    <h4 className="text-xl text-[#244D3F] font-semibold">Relationship Goal</h4>
                    <button className="btn">Edit</button>
                    </div>
                    <p > <span className='text-gray-400'>Connect every</span> <span className='font-bold '>{goal} days</span></p>
                </div>
    );
};

export default Goal;