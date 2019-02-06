import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
// import GridExampleGrid from './components/Grid'
import { connect } from "react-redux";
import { getUser, getProducts } from "./reducers/main";
// import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentWillMount(){
    this.props.getUser()
  }
  componentDidMount() {
    console.log(this.props.user);
    this.props.user && this.props.getProducts(this.props.user.user.user_id.toString());
  }
  render() {
    console.log(this.props);
    let user = this.props.user && this.props.user.name;
    return (
      <div className="App">
        <Menu />
        <div className="routesWrapper grid-container">
        Hi {user}
          {routes}
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
          <div>A Product</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getUser,
  getProducts
})(App);
