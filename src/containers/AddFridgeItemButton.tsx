import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addVegeItem, fetchVegeItems, addFridgeItem, requestFridgeItems, fetchFridgeItems } from './../redux/actions/index';
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
  selectedVege: any,
  dateAdded: any,
  dateExpired: any
}

interface ILocalProps {
  vegeItems: any[],
  addNewVegetableItem: any,
  requestVegeItems: any,
  addFridgeItem: any,
  requestFridgeItems: any
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
    this.props.requestVegeItems()
      .then(() => this.setState({ selectedVege: this.props.vegeItems[0] }));
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
              selectedVege: item,
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
      this.setState({ showSpinner: false, vege: '', selectedVege: item });
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
    try {
      val = JSON.parse(val);
    } catch (e) { }
    this.setState({
      selectedVege: val
    });
  }

  /**
   * 
   * @param date 
   * @param type dateAdded | dateExpired
   */
  handleDateChange(date: any, type: string) {
    if (type === 'dateAdded') {
      this.setState({
        dateAdded: date
      });
    } else {
      this.setState({
        dateExpired: date
      });
    }
  };

  addFridgeItem() {
    const { dateAdded, dateExpired, selectedVege } = this.state;
    const fridgeItem: IFridgeItem = {
      dateAdded: Fn.convertDateTimeToString(dateAdded),
      dateExpired: Fn.convertDateTimeToString(dateExpired),
      vegetableName: selectedVege.name,
      vegetableId: selectedVege.id
    };

    this.setState({ showSpinner: true });
    this.props.addFridgeItem(fridgeItem)
      .then(() => {
        this.setState({ showSpinner: false, show: !this.state.show });
        this.props.requestFridgeItems();
      }, () => this.setState({ showSpinner: false }));
  }

  render() {
    return (
      <div>
        <div className="add-fridge-item-button mb-3">
          <button onClick={this.handleClose} type="button" className="btn btn-primary">
            <i className="fas fa-plus"></i>&nbsp;
            Add Item</button>
        </div>
        <Modal className="add-fridge-item-button" centered={true} show={this.state.show} onHide={this.handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Add Fridge Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.showSpinner ? <><i className="fas fa-sync-alt"></i><div className="loading"></div></> : null}
            <form>
              <div className="d-flex">
                <div className="w-50 mr-1">
                  <label>Added Date</label>
                  <DatePicker
                    selected={this.state.dateAdded}
                    onChange={(e) => this.handleDateChange(e, 'dateAdded')}
                  />
                </div>
                <div className="w-50 ml-1">
                  <label>Expired Date</label>
                  <DatePicker
                    selected={this.state.dateExpired}
                    onChange={(e) => this.handleDateChange(e, 'dateExpired')}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="">Select vegetable</label>
                <select onChange={e => this.selectionChange(e.target.value)} value={JSON.stringify(this.state.selectedVege)} className="custom-select">
                  {this.props.vegeItems.map((item: any) => <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>)}
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
  addFridgeItem: (item: IFridgeItem) => dispatch(addFridgeItem(item)),
  requestFridgeItems: () => dispatch(fetchFridgeItems())
});

const mapStateToProps = (state: IState) => {
  const { vegeItems } = state;

  return { vegeItems };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFridgeItemButton);