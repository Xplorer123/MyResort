import React from 'react';
import {Link} from 'react-router-dom';

export default function RoomCard({room}) {
    return (
        <article className="room">
            <div className="img-container">
                <img src={room.images[0]} alt="single-room" />
                <div className="price-top">
                    <h6>{room.price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${room.slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{room.name}</p>
        </article>
    )
}
