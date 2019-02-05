import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


export default class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
               <Link to='/login'> <Menu.Item
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={this.handleItemClick}
                >
                    Login
        </Menu.Item></Link>

                <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                    Reviews
        </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                >
                    Upcoming Events
        </Menu.Item>
            </Menu>
        )
    }
}