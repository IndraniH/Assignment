import React, { Component } from 'react';
import '../App.css';
import { Fabric } from '../../node_modules/office-ui-fabric-react';
import EmployeeDetailsInput from './EmployeeDetailsInput';
import { initializeIcons } from '@uifabric/icons';
import { connect } from 'react-redux';
import * as actionCreators  from '../actions/empDetailsAction.js';

class App extends Component {
  constructor (props) {
    super(props);
    initializeIcons();
  }
  render() {
    return (
      <Fabric className="App" >
        <header className="App-header">
          <h1>View Employee Details</h1>
        </header>
        <main className="App-content">
          <section className ="App-userInput">
            <EmployeeDetailsInput {...this.props}/>
          </section>
          </main>
      </Fabric>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(App);
