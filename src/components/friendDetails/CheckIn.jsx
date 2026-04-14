import { useContext } from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { ContactContext } from '../../context/ContactContext';

const CheckIn = ({ targetedFriends }) => {
    // console.log(targetedFriends);
    const {allContact , setAllContact} = useContext(ContactContext)
    
    const handelCall = (targetedFriends) => {
        const {name} = targetedFriends
        console.log('call clicked', targetedFriends.name);
        const time = new Date()
        // const newContact = {name , status : 'call' , time: ''}
        console.log(time);
        

    }
    return (
        <div className="shadow bg-base-100 rounded-2xl  space-y-4 p-5 flex flex-col">
            <h3 className="text-xl text-[#244D3F]">Quick Check-In</h3>
            <div className='grid grid-cols-3 gap-3 '>
                <div onClick={() => { handelCall(targetedFriends) }} className="btn h-fit grid items-center justify-center rounded p-4 space-y-1 ">
                    <LuPhoneCall size={32} />
                    <p className='text-[18px] '>Call</p>
                </div>
                <div className="btn h-fit grid items-center justify-center rounded p-4 space-y-1 ">
                    <MdOutlineTextsms size={32} />
                    <p className='text-[18px] '>Text</p>
                </div>
                <div className="btn h-fit grid items-center justify-center rounded p-4 space-y-1 ">
                    <MdOutlineVideocam size={32} />
                    <p className='text-[18px] '>Video</p>
                </div>
            </div>
        </div>
    );
};

export default CheckIn;