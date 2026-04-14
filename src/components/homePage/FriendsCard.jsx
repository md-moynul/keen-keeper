import React from 'react';

const FriendsCard = ({ friend }) => {
    const { name, picture, days_since_contact, tags, status } = friend
    return (
        <div className='space-y-4 bg-base-100 rounded-2xl p-6 text-center'>
            <img className='mx-auto mb-2' src={picture} alt={`${name} pic`} />
            <h3 className='text-xl font-semibold '>{name}</h3>
            <p className='text-xs text-gray-400'>{days_since_contact}d ago</p>
            <div>{tags.map((e, i) => <span className='bg-green-100 px-3 py-2 font-semibold rounded-full text-xs text-[#244D3F] ' key={i}>{e}</span>)}</div>
            <div>
                  <span className={` text-white px-4 py-1 rounded-full  ${status === 'almost due' ? 'bg-amber-400': status ==='overdue' ? 'bg-red-400' : status === 'on-track' ? 'bg-[#244D3F]': ''}`}>{status}</span>
            </div>
          
        </div>
    );
};

export default FriendsCard;