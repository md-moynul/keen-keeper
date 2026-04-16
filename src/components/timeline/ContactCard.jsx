import call from '../../assets/images/call.png';
import text from '../../assets/images/text.png';
import video from '../../assets/images/video.png';

const ContactCard = ({ contact }) => {
    const {name, status,time} =contact;
    const newDate = time.toDateString()

    
    return (
        <div className='p-4 bg-base-100 rounded-2xl space-x-4 flex  shadow hover:shadow-xl hover:shadow-[#378368] hover:scale-101 transition-all duration-300 ' >
            <div>
                {status === 'Call' ? <img src={call} alt="" /> : status === 'Text' ? <img src={text} alt="" /> : status === 'Video' ? <img src={video} alt="" /> : ''}
            </div>
            <div>
                <p><span className='font-bold '>{status}</span> with {name}</p>
                <p>{newDate}</p>
            </div>
            
        </div>
    );
};

export default ContactCard;