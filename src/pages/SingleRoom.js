import React, { Component } from 'react'
import {RoomContext} from '../context'
import defaultBcg from '../images/room-1.jpeg'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state={
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return(
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to='/' className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            )
        }
        const [mainImage, ...images] = room.images;
        return (
            <React.Fragment>
                <StyledHero img={mainImage}>
                    <Banner title={`${room.name} room`}>
                        <Link to='/' className="btn-primary">
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((image, index) => <img src={image} key={index} alt='room'/>)}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details :</h3>
                            <p>{room.description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${room.price}</h6>
                            <h6>size : {room.size} SQFT</h6>
                            <h6>
                                max capacity :{" "}{room.capacity} {room.capacity>1 ? "people" : "person"}
                            </h6>
                            <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{room.breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {room.extras.map((item, index) => <li key={index}>- {item}</li>)}
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}
