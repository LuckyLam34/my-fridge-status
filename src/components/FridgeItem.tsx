import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class FridgeItem extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="fridge-item">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Added Date</th>
              <th scope="col">Expired Date</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th scope="row">1</th>
              <td> <img className="rounded" src='/assets/images/cabbage.jpg' /></td>
              <td>Cabbage</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}