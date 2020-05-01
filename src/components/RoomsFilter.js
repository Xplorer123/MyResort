import React from 'react'
import Title from './Title'
import {useContext} from 'react'
import {RoomContext} from '../context'

function getUnique(items, value) {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type, 
        capacity, 
        maxCapacity,
        price,
        maxPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context;
    const types = ['all', ...getUnique(rooms, 'type')];
    
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
            <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Guests: {capacity}</label>
                    <input
                        type="range"
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        min={1}
                        max={maxCapacity}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Max Price: ${price}</label>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        value={price}
                        min={0}
                        max={maxPrice}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <input
                        type="number"
                        name="minSize"
                        id="size"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                    />
                    <input
                        type="number"
                        name="maxSize"
                        id="size"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                    />
                </div>

                <div className="single-extra">
                    <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                    />
                    <label htmlFor="breakfast">breakfast</label>
                    <input
                        type="checkbox"
                        name="pets"
                        id="pets"
                        checked={pets}
                        onChange={handleChange}
                    />
                    <label htmlFor="pets">pets</label>
                </div>

            </form>
        </section>
    )
}
