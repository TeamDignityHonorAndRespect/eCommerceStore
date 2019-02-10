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
    this.getProds = this.getProds.bind(this);
  }
 
  componentDidMount() {
  this.props.getUser()
    
  }
  getProds(){
    this.props.getProducts(this.props.user.user_id.toString());
  }

  render() {
    console.log(this.props)
    this.props.user && this.getProds();
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
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
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
