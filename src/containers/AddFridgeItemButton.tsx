import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FirebaseService from './../services/firebase.service';
import { addVegeItem } from './../redux/actions/index';
import { connect } from 'react-redux';
import { IState, IVegeItem } from "../constants/interfaces";
import { Alert } from './../services/utils.service';
import { MESSAGES } from './../constants/messages';

class AddFridgeItemButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      vege: '',
      showSpinner: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.addNewVegetableItem = this.addNewVegetableItem.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentWillMount() {

  }

  handleClose() {
    this.setState({
      show: !this.state.show
    });
  }

  addNewVegetableItem() {
    const item: IVegeItem = {
      key: this.state.vege.replace(/ /g, ''),
      value: this.state.vege
    };

    this.setState({ showSpinner: true });
    this.props.addNewVegetableItem(item).then(() => {
      this.setState({ showSpinner: false, vege: '' });
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
              <div className="form-group">
                <label htmlFor="">Select vegetable</label>
                <select className="custom-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
                  <button onClick={() => this.addNewVegetableItem()} type="button" className="btn btn-primary mb-2"> <i className="fas fa-plus"></i>&nbsp;Add</button>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
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
  }
});

const mapStateToProps = (state: IState) => {
  const { loadingFlagLocal, vegeItems } = state;

  return { loadingFlagLocal, vegeItems };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFridgeItemButton);