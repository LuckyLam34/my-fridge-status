import React from 'react';
import FirebaseService from './services/firebase.service';
import { FridgeItems } from './containers/FridgeItems';
import { IState } from './constants/interfaces';
import { connect } from 'react-redux';
import { loading, fetchFridgeItems, removeFridgeItem } from './redux/actions';
import AddFridgeItemButton from './containers/AddFridgeItemButton';
import moment from 'moment';
import { Fn } from './services/utils.service';

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
              <h1 className="display-4 "><i className="fas fa-door-open"></i> My Fridge Status </h1>
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
  let { loadingFlagGlobal, fridgeItems } = state;
  fridgeItems = fridgeItems.sort((item1, item2) => {
    return Fn.calDaysLeft(item1.dateExpired) - Fn.calDaysLeft(item2.dateExpired);
  });
  return { loadingFlagGlobal, fridgeItems };
}

const mapDispatchToProps = (dispatch: any) => ({
  setLoading: () => dispatch(loading(false)),
  fetchFridgeItems: () => dispatch(fetchFridgeItems()),
  removeFridgeItem: (id: string) => dispatch(removeFridgeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
