import React, { useContext, useState } from 'react';
import { ContactContext } from '../../context/ContactContext';
import ContactCard from '../../components/timeline/ContactCard';

const Timeline = () => {
    const {
        allContact,
        callContact,
        textContact,
        videoContact
    } = useContext(ContactContext)
    const [shortingType, setSortingType] = useState();
    let flitteredContact = [...allContact]
    if (shortingType === 'Call') {
        flitteredContact = [...callContact]
    } else if (shortingType === 'Text') {
        flitteredContact = [...textContact]
    } else if (shortingType === 'Video') {
        flitteredContact = [...videoContact]
    }

    return (
        <div className='bg-base-200'>
            <div className='container mx-auto py-20 space-y-6 '>
                <h2 className="text-5xl font-bold">Timeline </h2>
                <div>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1">Filter timeline {shortingType} ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => { setSortingType('Call') }}><a>Call</a></li>
                            <li onClick={() => { setSortingType('Text') }}><a>Text</a></li>
                            <li onClick={() => { setSortingType('Video') }}><a>Video</a></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-6 '>
                    {flitteredContact.length === 0 ? <div>no data</div> : flitteredContact.map((contact, i) => <ContactCard key={i} contact={contact} />)}
                    { }
                </div>
            </div>
        </div>
    );
};

export default Timeline;