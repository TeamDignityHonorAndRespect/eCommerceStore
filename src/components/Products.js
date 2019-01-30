import React, { Component } from 'react';
import { getProducts, getUsers } from "../reducers/main"; //get products from redux
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
        this.props.users.data && this.props.getProducts(this.props.users.data[0].user_id);
        let products = this.state.products.map((obj, i) => {
            return <tr key={i}>

            </tr>
        });

        return (
            <table >
                <tbody>
                    <tr>
                        <th>Name</th><th>User</th><th>Created On</th>
                    </tr>
                    {products}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    getProducts,
    getUsers
})(Products);