import Navbar from '../components/shared/navbar/Navbar.jsx'
import Footer from '../components/shared/footer/Footer.jsx'
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
         <div>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;