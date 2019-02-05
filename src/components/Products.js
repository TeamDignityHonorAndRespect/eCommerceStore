import React, { Component } from 'react';
import { getProducts, getUser } from "../reducers/main"; //get products from redux
import { connect } from "react-redux";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };

    }
    componentDidMount() {

    }

    render() {

        return (
            <table >
                <tbody>
                    <tr>
                        <th>Name</th><th>User</th><th>Created On</th>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {

})(Products);