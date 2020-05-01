import React from 'react'
import Client from './Contentful';

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: '1',
        maxCapacity: 0,
        price: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    getData = async() =>{
        try{
            let response = await Client.getEntries({
                content_type: "beachResortRoom"
            });
            const rooms = this.formatData(response.items);
            const featuredRooms = rooms.filter(room => room.featured===true);
            const maxPrice = Math.max(...rooms.map(room => room.price));
            const maxSize = Math.max(...rooms.map(room => room.size));
            const maxCapacity = Math.max(...rooms.map(room => room.capacity));
            this.setState({
                rooms,
                sortedRooms: rooms,
                featuredRooms,
                loading: false,
                maxCapacity,
                price: maxPrice,
                maxPrice,
                maxSize
            })
        } catch(error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, handleChange: this.handleChange, getRoom: this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }

    formatData = (items) => {
        const rooms = items.map(item => {
            const id = item.sys.id;
            const images = item.fields.images.map(image => image.fields.file.url);
            return {id, ...item.fields, images};
        })
        return rooms;
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState(
            {
                [name] : value
            },
            this.filterRooms
        )
    }

    filterRooms = () => {
        const {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;
        
        let tempRooms = rooms;
        if(type!=='all'){
            tempRooms = tempRooms.filter(room => room.type===type);
        }
        tempRooms = tempRooms.filter(room => room.capacity >= +capacity);
        tempRooms = tempRooms.filter(room => room.price <= +price);
        tempRooms = tempRooms.filter(room => room.size >= +minSize && room.size<= +maxSize);
        if(breakfast===true){
            tempRooms = tempRooms.filter(room => room.breakfast===true);
        }
        if(pets===true){
            tempRooms = tempRooms.filter(room => room.pets===true);
        }
        
        this.setState({
            sortedRooms: tempRooms
        })
    }

    getRoom = slug => this.state.rooms.find(room => room.slug === slug);
}

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
export {RoomContext, RoomProvider, RoomConsumer};