import { ClockLoader } from 'react-spinners';
import useData from '../../hooks/useData';
import FriendsCard from './FriendsCard';

const HomePageFriends = () => {
    const {friends , loading} = useData()
    if (loading) {
        return <div className='flex justify-center items-center min-h-[80vh]'><ClockLoader color='#244D3F' size={80} /></div>
    }
    
    return (
        <div className='container mx-auto space-y-4 '>
            <h3 className="text-2xl font-bold">Your Friends</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {friends.map(friend => <FriendsCard key={friend.id} friend={friend}/>)}
            </div>
        </div>
    );
};

export default HomePageFriends;