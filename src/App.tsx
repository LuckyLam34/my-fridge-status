import React from 'react';
import FirebaseService from './services/firebase.service';
import { FridgeItems } from './containers/FridgeItems';

class App extends React.Component {
  database: any;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    FirebaseService.getFridgeItems().then((data: any) => console.log(data.val()))
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 ">My Fridge Status <i className="fas fa-door-open"></i></h1>
          </div>
        </div>
        <div className="container">
          <FridgeItems></FridgeItems>
        </div>
      </div>
    );
  }
}

export default App;
