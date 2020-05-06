import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export class AddFridgeItemButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {

  }

  handleClose() {
    this.setState({
      show: !this.state.show
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
            <form>
              <div className="form-group">
                <label htmlFor="">Select vegetable</label>
                <select className="custom-select">
                  {/* <option selected>Open this select menu</option> */}
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="d-flex">
                <div className="w-75">
                  <div className="form-group">
                    <label>Add new vegetable</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="" />
                  </div>
                </div>
                <div className="w-25 pr-0">
                  <button type="button" className="btn btn-primary mb-2"> <i className="fas fa-plus"></i>&nbsp;Add</button>
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