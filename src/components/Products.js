import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { getUser, getProducts, setProd } from "../reducers/main";
import AddProduct from './forms/AddProduct';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);


class Products extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        const that = this;
        this.props.getUser().then(
            axios.get(`/user/${this.props.user.user_id}`).then(response => {
                this.props.setProd(response.data);
            }).then(
                axios.get(`/user/${this.props.user.user_id}`).then(response => {
                    this.props.setProd(response.data);
                })
            )
        )
    }

    deleteProduct(event) {
        event.preventDefault();
        let num = event.target.value;
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                console.log('num variable', num)
                axios
                    .post(`/api/deleteProd/${num}`).then(
                        axios.get(`/user/${this.props.user.user_id}`).then(response => {
                            this.props.setProd(response.data);
                        }).then(
                            axios.get(`/user/${this.props.user.user_id}`).then(response => {
                                this.props.setProd(response.data);
                            })
                        )
                    )
                Swal.fire(
                    console.log(num),
                    //this.props.deleteProd(num) will go here
                    'Deleted!',
                    'success',
                    'Your file has been deleted.'
                )
            }
        })
    }

    render() {
        console.log(this.props)
        let results = this.props.products && this.props.products.map((data, i) => {
            return (
                <div>
                    <img src={data.image_url} style={{ maxHeight: '150px', maxWidth: '200px' }} />
                    <div>{data.prod_name}</div>
                    <div>{data.price}</div>
                    <div id="prod_id" style={{ visibility: 'hidden' }}>{data.prod_id}</div>
                    {/* <button class="ui button green" type="submit" value={data.prod_id}>EDIT</button> to be added later*/}
                    <button class="ui button negative" type="submit" value={data.prod_id} onClick={(event) => this.deleteProduct(event)}>DELETE</button>
                </div>
            )
        })
        return (
            <div>
                <h2 class="pageHeader">Market Place</h2>
                <div className="routesWrapper grid-container">{results}
                    <AddProduct />
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    getUser,
    getProducts,
    setProd
})(Products);