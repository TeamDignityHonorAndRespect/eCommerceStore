import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
import GridExampleGrid from './components/Grid'
import { connect } from "react-redux";
// import { getUsers } from "./reducers/main";
import { getUser } from "./reducers/main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props.user);
    let user = this.props.user && this.props.user.name;
    return (
      <div className="App">
        <Menu />
        <div className="routesWrapper grid-container">
        Hi {user}
          {routes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getUser
})(App);
