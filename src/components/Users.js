import React, { Component } from 'react';
import { getUsers } from "../reducers/main"; //get users from redux
import { connect } from "react-redux";

class Users extends Component {
    constructor() {
        super();
        this.state = {

        };

    }
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        console.log(this.props)
        return (
            <div >
                nothing
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    getUsers
})(Users);
