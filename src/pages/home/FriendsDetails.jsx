
import { PiBellZBold } from 'react-icons/pi';
import useData from '../../hooks/useData';
import { useParams } from 'react-router';
import { ClockLoader } from 'react-spinners';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms, MdOutlineVideoCall, MdOutlineVideocam } from 'react-icons/md';

const FriendsDetails = () => {
    const { id } = useParams()
    const { friends, loading } = useData();


    if (loading) {
        return <div className='flex justify-center items-center min-h-[80vh]'><ClockLoader color='#244D3F' size={80} /></div>
    }
    const targetedFriends = friends.find(f => f.id === parseInt(id))
    const {
        name,
        picture,
        days_since_contact,
        tags,
        status,
        bio,
        goal,
        preferred_contact_method,
        next_due_date
    } = targetedFriends
    return (
        <div className='bg-base-200 py-20'>
            <div className='container mx-auto grid grid-cols-5  gap-6'>
                <div to={`/home/${id}`} className='space-y-4 bg-base-100 rounded-2xl p-6 text-center col-span-2 row-span-2'>
                    <img className='mx-auto mb-2' src={picture} alt={`${name} pic`} />
                    <h3 className='text-xl font-semibold '>{name}</h3>

                    <div>
                        <span className={` text-white px-4 py-1 rounded-full  ${status === 'almost due' ? 'bg-amber-400' : status === 'overdue' ? 'bg-red-400' : status === 'on-track' ? 'bg-[#244D3F]' : ''}`}>{status}</span>
                    </div>
                    <div>{tags.map((e, i) => <span className='bg-green-100 px-3 py-2 font-semibold rounded-full text-xs text-[#244D3F] ' key={i}>{e}</span>)}</div>
                    <p className='font-medium text-gray-400'>"{bio}"</p>
                    <p className='text-[14px] text-gray-400'>Preferred: {preferred_contact_method}</p>
                </div>
                <div className=' space-y-2 bg-base-100 rounded-2xl text-center flex justify-center items-center' >
                    <div>
                        <h3 className="text-3xl font-semibold text-[#244D3F]">{days_since_contact}</h3>
                        <p className='text-[18px] text-gray-400'>Days Since Contact</p>
                    </div>
                </div>
                <div className=' space-y-2 bg-base-100 rounded-2xl text-center flex justify-center items-center' >
                    <div>
                        <h3 className="text-3xl font-semibold text-[#244D3F]">{goal}</h3>
                        <p className='text-[18px] text-gray-400'>Goal (Days)</p>
                    </div>
                </div>
                <div className=' space-y-2 bg-base-100 rounded-2xl text-center flex justify-center items-center' >
                    <div>
                        <h3 className="text-3xl font-semibold text-[#244D3F]">{next_due_date}</h3>
                        <p className='text-[18px] text-gray-400'>Next Due</p>
                    </div>
                </div>
                <div className='bg-base-100 rounded-2xl col-span-3 space-y-4 p-6 flex flex-col justify-center'>
                    <div className='flex justify-between  items-center'>
                    <h4 className="text-xl text-[#244D3F] font-semibold">Relationship Goal</h4>
                    <button className="btn">Edit</button>
                    </div>
                    <p className='text-gray-400'>Connect every <span className='font-bold text-black'>{goal} days</span></p>
                </div>
                <div className=' col-span-2 space-y-2 text-center'>
                    <div className="bg-base-100 p-4 shadow rounded flex justify-center"><p className='flex gap-2 items-center font-medium'><PiBellZBold size={20} /> Snooze 2 weeks</p> </div>
                    <div className="bg-base-100 p-4 shadow rounded flex justify-center"><p className='flex gap-2 items-center font-medium'><FiArchive size={20}/>Archive</p> </div>
                    <div className="bg-base-100 p-4 shadow rounded flex justify-center"><p className='flex text-red-500 gap-2 items-center font-medium'><RiDeleteBinLine size={20}/>Delete</p> </div>
                </div>
                <div className="bg-base-100 rounded-2xl col-span-3 space-y-4 p-6 flex flex-col">
                    <h3 className="text-xl text-[#244D3F]">Quick Check-In</h3>
                    <div className='grid grid-cols-3 gap-3'>
                        <div className="bg-base-200 border border-gray-200 grid items-center justify-center rounded p-4 space-y-2 ">
                            <LuPhoneCall size={32} />
                            <p className='text-[18px] '>Call</p>
                        </div>
                        <div className="bg-base-200 border border-gray-200 grid items-center justify-center rounded p-4 space-y-2 ">
                            <MdOutlineTextsms size={32}/>
                            <p className='text-[18px] '>Text</p>
                        </div>
                        <div className="bg-base-200 border border-gray-200 grid items-center justify-center rounded p-4 space-y-2 ">
                             <MdOutlineVideocam size={32}/>
                            <p className='text-[18px] '>Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;