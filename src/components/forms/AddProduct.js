import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




export default class MenuExampleBasic extends Component {
    state = {}

    handleClick(e){
        e.preventDefault();
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3', '4', '5']
          }).queue([
            {
              title: 'Product Name',
            },
            'Product Description',
            'Retail Price',
            'Sale Price',
            'SKU / Item Number',
            
          ]).then((result) => {
              console.log(result.value)
              // we could then do an axios request using result.value as parameters
            if (result.value) {
              Swal.fire({
                title: 'All done!',
                html:
                  'Storing New Product in Database',
                  
                confirmButtonText: 'Lovely!'
              })
            }
          })
    }

    render() {
        return (
        <button class="ui button" type="submit" style={{fontSize: '2em'}} onClick={(e) => this.handleClick(e)}>+</button>
        )
    }
}