import React, { Component } from 'react'
import {IoMdMenu} from 'react-icons/io';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state={
        isOpen: false
    }

    handleChange = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <div className="brand-name">
                            <Link to='/'>
                                My Resort
                            </Link>
                        </div>
                        <button
                            type='button'
                            className='nav-btn'
                            onClick={this.handleChange}
                        >
                            <IoMdMenu className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen? 'nav-links show-nav' : 'nav-links'}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/rooms'>Rooms</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        )
    }
}
