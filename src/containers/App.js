import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Exchanger from 'containers/Exchanger';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Exchanger />
      </div>
    )
  }
}

export default connect()(App);