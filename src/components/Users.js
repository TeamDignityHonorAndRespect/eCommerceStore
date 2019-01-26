import React, { Component } from 'react';
import { getUsers } from "../reducers/main"; //get users from redux
import { connect } from "react-redux";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };

    }
    componentDidMount() {
        this.props.getUsers().then(resp => this.setState({users: resp.value.data}))
    }

    render() {
        console.log('state: ', this.state)
        return (
            <div >
                nothing
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    getUsers,
})(Users);