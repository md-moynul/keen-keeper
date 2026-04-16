import { useContext } from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { ContactContext } from '../../context/ContactContext';
import { toast } from 'react-toastify';

const CheckIn = ({ targetedFriends }) => {
    const { callContact,
        textContact,
        videoContact,
        setCallContact,
        setTextContact,
        setVideoContact,
        allContact,
        setAllContact,
    } = useContext(ContactContext)

    const handelCall = (targetedFriends) => {
        const { name } = targetedFriends
        // console.log('call clicked', targetedFriends.name);
        const time = new Date()
        const newContact = { name, status: 'Call', time: time }
        setCallContact([...callContact, newContact])
        setAllContact([...allContact, newContact])
        toast.success(`Call with ${name}`)
    }
    const handelMassage = (targetedFriends) => {
        const { name } = targetedFriends
        // console.log('call clicked', targetedFriends.name);
        const time = new Date()
        const newContact = { name, status: 'Text', time: time }
        setTextContact([...textContact, newContact])
        setAllContact([...allContact, newContact])
        toast.success(`Massage with ${name}`)
    }
    const handelVideo = (targetedFriends) => {
        const { name } = targetedFriends
        // console.log('call clicked', targetedFriends.name);
        const time = new Date()
        const newContact = { name, status: 'Video', time: time }
        setVideoContact([...videoContact, newContact])
        setAllContact([...allContact, newContact])
        toast.success(`Video with ${name}`)
    }
    // console.log(allContact);


    return (
        <div className="bg-base-100 rounded-2xl  space-y-4 p-5 flex flex-col shadow hover:shadow-xl hover:shadow-[#244D3F] hover:scale-101 transition-all duration-300">
            <h3 className="text-xl text-[#244D3F]">Quick Check-In</h3>
            <div className='grid grid-cols-3 gap-3 '>
                <div onClick={() => { handelCall(targetedFriends) }} className="btn h-fit grid items-center justify-center rounded p-4 space-y-1 ">
                    <LuPhoneCall size={32} />
                    <p className='text-[18px] '>Call</p>
                </div>
                <div onClick={() => { handelMassage(targetedFriends) }} className="btn h-fit grid items-center justify-center rounded p-4 space-y-1 ">
                    <MdOutlineTextsms size={32} />
                    <p className='text-[18px] '>Text</p>
                </div>
                <div onClick={() => { handelVideo(targetedFriends) }} className="btn h-fit grid items-center justify-center rounded p-4 space-y-1 ">
                    <MdOutlineVideocam size={32} />
                    <p className='text-[18px] '>Video</p>
                </div>
            </div>
        </div>
    );
};

export default CheckIn;