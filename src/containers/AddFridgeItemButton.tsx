import React from "react";

export class AddFridgeItemButton extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="add-fridge-item-button">
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
    )
  }
}