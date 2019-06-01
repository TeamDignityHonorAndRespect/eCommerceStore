import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
// import GridExampleGrid from './components/Grid'
import { connect } from "react-redux";
import { getUser, getProducts, setProd } from "./reducers/main";
import AddProduct from './components/forms/AddProduct';
import HeadLine from './components/HeadLine';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';


import axios from 'axios';



class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };

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


  render() {
    return (
      <div className="App">
        <Menu />

        {!this.props.user && <HeadLine />}
        {this.props.user && <div >
          {this.props.isLoading &&
            <Segment>
              <Dimmer active inverted>
                <Loader inverted content='Loading' />
              </Dimmer>

              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>}
          {routes}
          {!this.props.user && <button>Login</button>}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getUser,
  getProducts,
  setProd
})(App);
