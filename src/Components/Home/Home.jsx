import React from 'react';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Login from '../Login/Login';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <header className='w-full'>
                <div  className='lg:w-full'>
                <Banner/>
                </div>
            </header>
            <main className='max-w-[1200px] mx-auto'>
                    <AboutUs/>
                    <Experience/>
                    <ContactUs/>
            </main>
        </div>
    );
};

export default Home;