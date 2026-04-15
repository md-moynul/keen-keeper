
import useData from '../../hooks/useData';
import { useParams } from 'react-router';
import { ClockLoader } from 'react-spinners';
import CheckIn from '../../components/friendDetails/CheckIn';
import SnoozeArchiveDelete from '../../components/friendDetails/SnoozeArchiveDelete';
import Goal from '../../components/friendDetails/Goal';
import FriendDetailsMain from '../../components/friendDetails/FriendDetailsMain';

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
    } = targetedFriends;
    return (
        <div className='bg-base-200 py-20'>
            <div className='container mx-auto grid grid-cols-3 md:grid-cols-5  gap-6'>
                <div className='col-span-3 md:col-span-2 row-span-2'>
                    <FriendDetailsMain name={name} picture={picture} tags={tags} status={status} bio={bio} preferred_contact_method={preferred_contact_method}/>
                </div>
                <div className='shadow hover:shadow-xl hover:shadow-blue-300 hover:scale-101 transition-all duration-300  space-y-2 bg-base-100 rounded-2xl text-center flex justify-center items-center py-8 px-4' >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#244D3F]">{days_since_contact}</h3>
                        <p className='text-[18px] text-gray-400'>Days Since Contact</p>
                    </div>
                </div>
                <div className='shadow hover:shadow-xl hover:shadow-blue-300 hover:scale-101 transition-all duration-300  space-y-2 bg-base-100 rounded-2xl text-center flex justify-center items-center py-8 px-4' >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#244D3F]">{goal}</h3>
                        <p className='text-[18px] text-gray-400'>Goal (Days)</p>
                    </div>
                </div>
                <div className=' shadow hover:shadow-xl hover:shadow-blue-300 hover:scale-101 transition-all duration-300 space-y-2 bg-base-100 rounded-2xl text-center flex justify-center items-center py-8 px-4' >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#244D3F]">{next_due_date}</h3>
                        <p className='text-[18px] text-gray-400'>Next Due</p>
                    </div>
                </div>
               <div className='col-span-3 shadow bg-base-100 rounded-2xl pt-8'>
                    <Goal goal={goal}/>
               </div>
               <div className='col-span-3 md:col-span-2 '>
                <SnoozeArchiveDelete />
               </div>
                <div className='col-span-3'>
                    <CheckIn targetedFriends={targetedFriends}/>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;