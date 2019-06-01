import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { getUser, getProducts, setProd, getAllProducts, setAllProd } from "../reducers/main";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);


class Products extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        const that = this;
        axios.get(`/allProducts`).then(response => {
            this.props.setAllProd(response.data);
        })
    }

    render() {
        console.log(this.props)
        let results = this.props.all_products && this.props.all_products.map((data, i) => {
            return (
                <div>
                    <img src={data.image_url} style={{ maxHeight: '150px', maxWidth: '200px' }} />
                    <div>{data.prod_name}</div>
                    <div>{data.price}</div>
                    <div id="prod_id" style={{ visibility: 'hidden' }}>{data.prod_id}</div>
                    <button class="ui button primary" type="submit" value={data.prod_id}>BUY</button>
                </div>
            )
        })
        return (
            <div>
                <h2 class="pageHeader">Market Place</h2>
                <div className="routesWrapper grid-container">{results}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    getUser,
    getProducts,
    setProd,
    getAllProducts,
    setAllProd
})(Products);