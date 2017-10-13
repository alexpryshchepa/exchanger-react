import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import Main from 'components/Main';
import Input from 'components/Input';
import * as actions from 'actions';

class Exchanger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      exchanged: this.props.rates.RUB
    }
    this.handleFocus = this.handleFocus.bind(this);
    this.handleExchange = this.handleExchange.bind(this);
  }
  
  handleFocus () {
    this.props.onGetRates();
  }
  
  handleExchange (e) {
    this.setState({
      exchanged: Math.round(e.target.value * this.props.rates.RUB)
    })
  }
  
  render() {
    return ( 
      <Main children={
        this.props.rates ? (
          <div>
            <Input 
              currency='USD' 
              placeholder='1' 
              onKeyUp={this.handleExchange} />
            <Input 
              currency='RUB' 
              placeholder={Math.round(this.props.rates.RUB)} 
              value={this.state.exchanged !== 0 ? this.state.exchanged : Math.round(this.props.rates.RUB)}
              readonly 
              ref={input => this.input = input} />
          </div>
        ) : (
          <div>
            <div>You should get actual rates...</div>
            <button onClick={this.handleFocus}>Get Rates</button>
          </div>
        )
      } />
    )
  }
}

export default connect(
  state => ({
    rates: state.currencies.rates
  }),
  dispatch => ({
    onGetRates: () => {
      dispatch(actions.getRates());
    }
  })
)(Exchanger)