import React, { Component } from 'react';
import { getProducts } from "../reducers/main"; //get products from redux
import { connect } from "react-redux";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };

    }
    componentDidMount() {
        this.props.getProducts().then(resp => this.setState({ products: resp.value.data }))
    }

    truncate(co) {
        return co.slice(0, 10);
    }

    render() {
        console.log('state: ', this.state)
        console.log('props', this.props)
        let products = this.state.products.map((obj, i) => {
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
})(Products);