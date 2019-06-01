import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUser, getProducts } from "../reducers/main";


class MenuExampleBasic extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.getFirstName = this.getFirstName.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    getFirstName(name) {
        name = name.split(" ");
        return name[0];
    }
    render() {
        const { activeItem } = this.state
        return (
            <Menu>
                {!this.props.user && <a href='http://localhost:3001/auth'> <Menu.Item
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={this.handleItemClick}
                >
                    Login
        </Menu.Item></a>}
                {this.props.user && <a href='http://localhost:3001/auth/logout'> <Menu.Item
                    name='Signout'
                    active={activeItem === 'Signout'}
                    onClick={this.handleItemClick}
                >
                    Signout
        </Menu.Item></a>}
                {this.props.user && <Link to="/Market"><Menu.Item
                    name='Market'
                    active={activeItem === 'Market'}
                    onClick={this.handleItemClick}
                >
                    Market Place
        </Menu.Item></Link>}
                {this.props.user && <Link to='/products'> <Menu.Item
                    name='Your Products'
                    active={activeItem === 'Your Products'}
                    onClick={this.handleItemClick}
                >
                    Your Products
        </Menu.Item></Link>}
                {this.props.user && <div className="item right">Hi {this.getFirstName(this.props.user.name)}</div>}
            </Menu>

        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    getUser,
    getProducts
})(MenuExampleBasic);