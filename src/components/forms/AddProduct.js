import React, { Component } from 'react';
import { getUser, getProducts } from "../../reducers/main";
import Swal from 'sweetalert2'
import axios from 'axios';
import { connect } from "react-redux";


class MenuExampleBasic extends Component {
    state = {}

    handleClick(e){
        e.preventDefault();
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            confirmButtonColor: '#85bb65',
            showCancelButton: true,
            progressSteps: ['1', '2', '3', '4', '5', '6'],
          }).queue([
            {
              title: 'Product Name',
            },
            'Product Description',
            'Retail Price',
            'Sale Price',
            'SKU / Item Number',
            'Image URL'
          ]).then((result) => {
              let v = result.value;
              let body = {
                prodName: v[0],
                prodDescription: v[1],
                retailPrice: v[2],
                salePrice: v[3],
                sku: v[4],
                imageURL: v[5],
                ownerID: this.props.user.user_id
              }
            if (result.value) {
              axios
              .post(`/api/createProd/${this.props.user.user_id}`, body)
              Swal.fire({
                title: 'All done!',
                html:
                  'Storing New Product in Database',
                confirmButtonText: 'Lovely!'
              })
            }
          }).then(results => console.log(results), this.props.getProducts(this.props.user.user_id))
    }

    render() {
        return (
        <div>add a product<br></br>
           {this.props.user && <button 
            class="ui button addButton" 
            type="submit" 
            value={this.props.user.user_id} 
            onClick={(e) => this.handleClick(e)}>+</button>}
        </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getUser,
  getProducts
})(MenuExampleBasic);