import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
// import GridExampleGrid from './components/Grid'
import { connect } from "react-redux";
import { getUser, getProducts } from "./reducers/main";
import AddProduct from './components/forms/AddProduct';
import HeadLine from './components/HeadLine';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
// import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };

  }
 
  componentDidMount() {
    const that = this;
  this.props.getUser().then(function (response) {
    console.log(response.value, '00011111')
    if(response.value){
    that.props.getProducts(response.value.user_id);
    }
  })
    
  }

  render() {
    console.log(this.props)
    let results = this.props.products && this.props.products.map((data, i) => {
      return(
        <div>
        <div>{data.sku}</div>
        <div>{data.prod_name}</div>
        <div>{data.price}</div>
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
