import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class FridgeItem extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Card className="fridge-item">
        <div className="d-flex flex-row bd-highlight item-container">
          <div className="p-2 bd-highlight">
            <img src='/assets/images/cabbage.jpg' />
          </div>
          <div className="p-2 bd-highlight">
            <Card.Title>Cabbage</Card.Title>
          </div>
          <div className="p-2 bd-highlight">Flex item 3333333</div>
        </div>
      </Card>
    )
  }
}