
import useData from '../../hooks/useData';

const HomePageFriends = () => {
    const {friends , loading} = useData()
    console.log(friends,loading);
    
    return (
        <div className='container mx-auto space-y-4 '>
            <h3 className="text-2xl font-bold">Your Friends</h3>
            <div>
                {friends.map(friend => <h1>{friend.name}</h1>)}
            </div>
        </div>
    );
};

export default HomePageFriends;