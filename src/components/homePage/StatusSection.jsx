import useData from '../../hooks/useData';


const StatusSection = () => {
    const {friends } = useData()
    const total  = friends.length;
    let onTrack = 0
    friends.forEach( friend => {
        if(friend.status === 'on-track'){
            onTrack++;
        }
    })
    let needAttention = 0;
      friends.forEach( friend => {
        if(friend.need_attention){
            needAttention++;
        }
    })
   
   
    
    const status = [
        {number: total , string : 'Total Friends'},
        {number: onTrack , string : 'On Track'},
        {number: needAttention , string : 'Need Attention'},
        {number: '12' , string : 'Interactions This Month'},
    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center container mx-auto'>
            {status.map( (e,i) => <div className='p-8 space-y-2 bg-base-100 rounded-2xl shadow hover:shadow-xl hover:shadow-[#244D3F] hover:scale-101 transition-all duration-300' key={i}><h3 className="text-3xl font-semibold text-[#244D3F]">{e.number}</h3> <p className='text-[18px] text-gray-400'>{e.string}</p></div>)}
        </div>
    );
};

export default StatusSection;