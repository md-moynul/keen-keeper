import logo from '../../../assets/images/logo-xl.png'
import { TbBrandInstagramFilled } from 'react-icons/tb';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-8 px-4 md:px-0'>
            <div className='space-y-10 text-center container mx-auto '>
                <div className='space-y-4.5 text-gray-300'>
                    <img className='mx-auto' src={logo} alt="" />
                    < p className=''>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h3 className="text-2xl font-medium">Social Links</h3>
                    <div className='flex justify-center gap-2'>
                        <a  className='bg-base-100 text-black p-3 rounded-full' href=""><TbBrandInstagramFilled size={30} /></a>
                        <a  className='bg-base-100 text-black p-3 rounded-full' href=""><FaFacebookSquare size={30} /></a>
                        <a  className='bg-base-100 text-black p-3 rounded-full' href=""><FaXTwitter  size={30} /></a>
                    </div>
                </div>
                <div className='flex flex-col-reverse gap-4 md:flex-row md:justify-between text-gray-400'>
                    <a>&copy;2026 KeenKeeper. All rights reserved.</a>
                    <div className="flex gap-4 mx-auto md:mx-0">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;