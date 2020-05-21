import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FirebaseService from './../services/firebase.service';
import { addVegeItem, fetchVegeItems, addFridgeItem } from './../redux/actions/index';
import { connect } from 'react-redux';
import { IState, IVegeItem } from "../constants/interfaces";
import { Alert, Fn } from './../services/utils.service';
import { MESSAGES } from './../constants/messages';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { IFridgeItem } from './../constants/interfaces';
interface ILocalState {
  show: boolean,
  vege: string,
  showSpinner: boolean,
  selectedVege: string,
  dateAdded: any,
  dateExpired: any
}

interface ILocalProps {
  vegeItems: any[],
  addNewVegetableItem: any,
  requestVegeItems: any,
  addFridgeItem: any
}

class AddFridgeItemButton extends React.Component<ILocalProps, ILocalState> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      vege: '',
      showSpinner: false,
      selectedVege: '',
      dateAdded: new Date(),
      dateExpired: new Date()
    };
    this.handleClose = this.handleClose.bind(this);
    this.addNewVegetableItem = this.addNewVegetableItem.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.addFridgeItem = this.addFridgeItem.bind(this);
  }

  componentWillMount() {
    this.props.requestVegeItems();
  }

  handleClose() {
    this.setState({
      show: !this.state.show
    });
  }

  addNewVegetableItem() {
    if (!this.state.vege) return;

    const item: IVegeItem = {
      key: this.state.vege.replace(/ /g, ''),
      value: this.state.vege[0].toUpperCase() + this.state.vege.slice(1)
    };

    if (Fn.isExisted(item.key, this.props.vegeItems, 'id')) {
      Alert.showErrorAlert(MESSAGES.vegeExsited)
        .then(agree => {
          if (agree) {
            this.setState({
              selectedVege: item.key,
              vege: ''
            });
          } else {
            this.setState({
              vege: ''
            })
          }
        });
      return;
    }

    this.setState({ showSpinner: true });
    this.props.addNewVegetableItem(item).then(() => {
      this.setState({ showSpinner: false, vege: '', selectedVege: item.key });
      Alert.showSuccessAlert(MESSAGES.addNewVegeSuccess);
    }, () => {
      this.setState({ showSpinner: false });
    });
  }

  onChangeHandler(v: string) {
    this.setState({
      vege: v
    });
  }

  selectionChange(val: string) {
    this.setState({
      selectedVege: val
    });
  }

  handleDateChange(date: any) {
    console.log(date);
  };

  addFridgeItem() {
    let { dateAdded, dateExpired, selectedVege } = this.state;
    console.log({ dateAdded, dateExpired, selectedVege })
  }

  render() {
    return (
      <div>
        <div className="add-fridge-item-button">
          <button onClick={this.handleClose} type="button" className="btn btn-primary">
            <i className="fas fa-plus"></i>&nbsp;
            Add Item</button>
        </div>
        <Modal className="add-fridge-item-button" centered={true} show={this.state.show} onHide={this.handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.showSpinner ? <><i className="fas fa-sync-alt"></i><div className="loading"></div></> : null}
            <form>
              <div className="d-flex">
                <div className="w-50 mr-1">
                  <label>Added Date</label>
                  <DatePicker
                    selected={this.state.dateAdded}
                    onChange={this.handleDateChange}
                  />
                </div>
                <div className="w-50 ml-1">
                  <label>Expired Date</label>
                  <DatePicker
                    selected={this.state.dateExpired}
                    onChange={this.handleDateChange}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="">Select vegetable</label>
                <select onChange={e => this.selectionChange(e.target.value)} value={this.state.selectedVege} className="custom-select">
                  {this.props.vegeItems.map((item: any) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
              </div>
              <div className="d-flex">
                <div className="w-75">
                  <div className="form-group">
                    <label>Add new vegetable</label>
                    <input onChange={e => this.onChangeHandler(e.target.value)} value={this.state.vege} type="text" className="form-control" aria-describedby="emailHelp" placeholder="" />
                  </div>
                </div>
                <div className="w-25 pr-0">
                  <div className="form-group">
                    <button onClick={() => this.addNewVegetableItem()} type="button" className="btn btn-primary"> <i className="fas fa-plus"></i>&nbsp;Add</button>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addFridgeItem}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch: any) => ({
  addNewVegetableItem: (item: IVegeItem) => {
    return dispatch(addVegeItem(item));
  },
  requestVegeItems: () => dispatch(fetchVegeItems()),
  addFridgeItem: (item: IFridgeItem) => dispatch(addFridgeItem(item))
});

const mapStateToProps = (state: IState) => {
  const { vegeItems } = state;

  return { vegeItems };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFridgeItemButton);