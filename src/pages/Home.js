import React from 'react'
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <React.Fragment>
            <Hero hero="defaultHero"> 
                <Banner 
                    title="luxurious rooms"
                    subtitle="delux rooms starting at $299"
                >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    )
}
