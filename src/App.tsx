import React from 'react';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './env/firebase-config';

class App extends React.Component {
  database: any;

  constructor(props: any) {
    super(props);
    // firebase.initializeApp(firebaseConfig);
    // this.database = firebase.database();
    // this.database.ref('/fridge-items').then((data: any) => {
    //   console.log(data);
    // })
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 ">My Fridge Status <i className="fas fa-door-open"></i></h1>
        </div>
      </div>
    );
  }
}

export default App;
