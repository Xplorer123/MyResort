import React from 'react'
import {RoomContext} from '../context';
import Loading from './Loading';
import RoomCard from './RoomCard';
import Title from './Title'

export default class FeaturedRooms extends React.Component {
    static contextType = RoomContext;
    render() {
        const {loading, featuredRooms} = this.context;
        const rooms = featuredRooms.map(room => <RoomCard key={room.id} room={room} />);
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
