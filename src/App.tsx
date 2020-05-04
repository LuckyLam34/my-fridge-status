import React from 'react';
import FirebaseService from './services/firebase.service';
import { FridgeItems } from './containers/FridgeItems';
import { State } from './constants/interfaces';
import { connect } from 'react-redux';
import { loading, fetchFridgeItems } from './redux/actions';

interface IEx {
  loadingFlag: boolean,
  fetchFridgeItems: any,
  fridgeItems: any
}
class App extends React.Component<IEx, any> {
  database: any;

  constructor(props: any) {
    super(props);
    console.log(this.props)
  }

  componentDidMount() {
    this.props.fetchFridgeItems();
  }

  render() {
    return (
      <div className="app">
        {this.props.loadingFlag ? <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div> : null}
        <div className={this.props.loadingFlag ? 'loading' : ''}>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4 ">My Fridge Status <i className="fas fa-door-open"></i></h1>
            </div>
          </div>
          <div className="container">
            <FridgeItems {...this.props}></FridgeItems>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { loadingFlag, fridgeItems } = state;

  return { loadingFlag, fridgeItems };
}

const mapDispatchToProps = (dispatch: any) => ({
  setLoading: () => dispatch(loading(false)),
  fetchFridgeItems: () => dispatch(fetchFridgeItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
