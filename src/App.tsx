import React from 'react';
import FirebaseService from './services/firebase.service';
import { FridgeItems } from './containers/FridgeItems';
import { State } from './constants/interfaces';
import { connect } from 'react-redux';

class App extends React.Component {
  database: any;

  constructor(props: any) {
    super(props);
    console.log(this.props)
  }

  componentDidMount() {
    FirebaseService.getFridgeItems().then((data: any) => console.log(data.val()))
  }

  render() {
    return (
      <div className="app">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="loading">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4 ">My Fridge Status <i className="fas fa-door-open"></i></h1>
            </div>
          </div>
          <div className="container">
            <FridgeItems></FridgeItems>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { loadingFlag } = state;

  return loadingFlag;
}

export default connect(mapStateToProps)(App);
