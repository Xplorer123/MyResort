import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktail',
                info: 'Free cocktail as a part of room service'
            },

            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Go for Hiking and enjoy the beautiful scenery with free Hiking Gears"
            },

            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Free shuttle service throughout the resort"
            },

            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Open bar for the customers"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) =>
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>)}
                </div>
            </section>
        )
    }
}
