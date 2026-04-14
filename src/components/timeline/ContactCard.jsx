import call from '../../assets/images/call.png';
import text from '../../assets/images/text.png';
import video from '../../assets/images/video.png';

const ContactCard = ({ contact }) => {
    return (
        <div className='p-4 bg-base-100 rounded-2xl space-x-4 flex' >
            <div>
                {contact.status === 'Call' ? <img src={call} alt="" /> : contact.status === 'Text' ? <img src={text} alt="" /> : contact.status === 'Video' ? <img src={video} alt="" /> : ''}
            </div>
            <div>
                <p><span className='font-bold '>{contact.status}</span> with {contact.name}</p>
                <p>{}</p>
            </div>
            
        </div>
    );
};

export default ContactCard;