import { PiBellZBold } from 'react-icons/pi';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
const SnoozeArchiveDelete = () => {
    return (
         <div className='space-y-2 text-center'>
                    <div className="bg-base-100 p-4 shadow rounded flex justify-center"><p className='flex gap-2 items-center font-medium'><PiBellZBold size={20} /> Snooze 2 weeks</p> </div>
                    <div className="bg-base-100 p-4 shadow rounded flex justify-center"><p className='flex gap-2 items-center font-medium'><FiArchive size={20}/>Archive</p> </div>
                    <div className="bg-base-100 p-4 shadow rounded flex justify-center"><p className='flex text-red-500 gap-2 items-center font-medium'><RiDeleteBinLine size={20}/>Delete</p> </div>
                </div>
    );
};

export default SnoozeArchiveDelete;