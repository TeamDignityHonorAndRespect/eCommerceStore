import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
// import GridExampleGrid from './components/Grid'
import { connect } from "react-redux";
import { getUser, getProducts } from "./reducers/main";
import AddProduct from './components/forms/AddProduct';
import HeadLine from './components/HeadLine';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import axios from 'axios';
const MySwal = withReactContent(Swal)


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.deleteProduct = this.deleteProduct.bind(this);
  }
 
  componentDidMount() {
    const that = this;
  this.props.getUser().then(function (response) {
    if(response.value){
    that.props.getProducts(response.value.user_id);
    }
  })
  }
  
deleteProduct(event){
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
    Swal.fire(
      console.log(num),
      //this.props.deleteProd(num) will go here
      'Deleted!',
      'success',
      'Your file has been deleted.',
      
    )
  }
})
}
  render() {
    console.log(this.props)
    let results = this.props.products && this.props.products.map((data, i) => {
      return(
        <div>
          <img src={data.image_url} style={{maxHeight: '150px', maxWidth: '200px'}}/>
          <div>{data.prod_name}</div>
          <div>{data.price}</div>
          <div id="prod_id" style={{visibility: 'hidden'}}>{data.prod_id}</div>
          <button class="ui button green" type="submit" value={data.prod_id}>EDIT</button>
          <button class="ui button negative" type="submit" value={data.prod_id} onClick={(event)=>this.deleteProduct(event)}>DELETE</button>
        </div>
      )
    })
    return (
      <div className="App">
        <Menu />
        {routes}
        <HeadLine/>
        {this.props.user && <div className="routesWrapper grid-container">
          {this.props.isLoading &&    
        <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>}
            {results}
          <AddProduct/>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getUser,
  getProducts
})(App);
