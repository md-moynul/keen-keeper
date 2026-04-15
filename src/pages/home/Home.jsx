
import HomePageFriends from "../../components/homePage/HomePageFriends";
import HomePageHeading from "../../components/homePage/HomePageHeading";
import StatusSection from "../../components/homePage/StatusSection";

const Home = () => {
    return (
    <div className='bg-base-200'>
        <div className=' py-10 px-4 lg:px-0 md:py-15 lg:py-20 space-y-10'>
            <HomePageHeading />
            <StatusSection/>
            <hr className='container mx-auto text-base-300' />
            <HomePageFriends/>
        </div>
    </div>
    );
};

export default Home;