import React from 'react';
import FirebaseService from './services/firebase.service';
import { FridgeItems } from './containers/FridgeItems';
import { IState } from './constants/interfaces';
import { connect } from 'react-redux';
import { loading, fetchFridgeItems } from './redux/actions';
import AddFridgeItemButton from './containers/AddFridgeItemButton';

interface IEx {
  loadingFlagGlobal: boolean,
  fetchFridgeItems: any,
  fridgeItems: any
}
class App extends React.Component<IEx, any> {
  database: any;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFridgeItems();
  }

  render() {
    return (
      <div className="app">
        {this.props.loadingFlagGlobal ? <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div> : null}
        <div className={this.props.loadingFlagGlobal ? 'loading' : ''}>
          <div className="jumbotron jumbotron-fluid mb-3 mb-sm-5">
            <div className="container">
              <h1 className="display-4 ">My Fridge Status <i className="fas fa-door-open"></i></h1>
            </div>
          </div>
          <div className="container">
            <FridgeItems {...this.props}></FridgeItems>
            <AddFridgeItemButton></AddFridgeItemButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  const { loadingFlagGlobal, fridgeItems } = state;

  return { loadingFlagGlobal, fridgeItems };
}

const mapDispatchToProps = (dispatch: any) => ({
  setLoading: () => dispatch(loading(false)),
  fetchFridgeItems: () => dispatch(fetchFridgeItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
