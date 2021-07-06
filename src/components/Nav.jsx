import React, { Component } from 'react';
import {Link } from 'react-router-dom';

 class Nav extends Component{

    render(){
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <span className='navbar-brand'>Tracker</span>
                    <button type='button' className='navbar-toggler' data-toggler='collapse' data-target='#navbarSupportedContent' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div className='collase navbar-collapse' id="navbarSupportedContent">
                        <ul className='navbar-nav'>
                            <li className='nav-item'><Link className='nav-link' to = "/create">CreateExercise</Link></li>
                            <li className='nav-item'><Link className='nav-link' to = "/">List</Link></li>
                            <li className='nav-item'><Link className='nav-link' to = "/user">CreateUser</Link></li>    
                            {/* <li><Link to = "/create"></Link></li>                     */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;