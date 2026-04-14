import React, { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import ContactCard from '../../components/timeline/ContactCard';

const Timeline = () => {
    const { allContact} = useContext(ContactContext)
    console.log(allContact);
    
    return (
        <div className='bg-base-200'>
            <div className='container mx-auto py-20 space-y-6 '>
                <h2 className="text-5xl font-bold">Timeline </h2>
                <div>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1">Filter timeline ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-6 '>
                    {allContact.length === 0 ? <div>no data</div> :allContact.map((contact , i) =>  <ContactCard key={i} contact={contact}/>)}
                    {}
                </div>
            </div>
        </div>
    );
};

export default Timeline;