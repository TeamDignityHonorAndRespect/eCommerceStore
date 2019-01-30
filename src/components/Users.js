import React, { Component } from 'react';
import { getUsers } from "../reducers/main"; //get users from redux
import { connect } from "react-redux";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
        this.truncate = this.truncate.bind(this);
    }
    componentDidMount() {
        this.props.getUsers().then(resp => this.setState({ users: resp.value.data }))
    }

    truncate(co) {
        return co.slice(0, 10);
    }

    render() {
        let users = this.props.users.data && this.props.users.data.map((obj, i) => {
            return <tr key={i}>
                <td>{obj.name}</td>
                <td>{obj.user_id}</td>
                <td>{this.truncate(obj.created_on)}</td>
            </tr>
        });
        return (
            <table >
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>User</th>
                        <th>Created On</th>
                    </tr>
                    {users}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    getUsers
})(Users);