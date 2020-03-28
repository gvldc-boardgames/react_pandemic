import React from 'react';
import Button from './../Button';

//import { createQuickGameInit, createCustomGameInit } from '../actions/globalActions';
//import QuickGame from '../components/setup/QuickGame';
//import CustomGame from '../containers/CustomGame';
//import Footer from '../components/setup/Footer';


const Setup = () => {
/*constructor(props) {
  super(props);
  this.onQuickGameClicked = this.onQuickGameClicked.bind(this);
  this.onQuickNumberOfPlayersPicked = this.onQuickNumberOfPlayersPicked.bind(this);
  this.onCustomGameClicked = this.onCustomGameClicked.bind(this);
  this.onCustomGameComplete = this.onCustomGameComplete.bind(this);
  this.showMenu = this.showMenu.bind(this);
}

state = {
  mode: null
}

onQuickGameClicked() {
  this.setState({ mode: 'quick' });
}

onCustomGameClicked() {
  this.setState({ mode: 'custom' });
}

onQuickNumberOfPlayersPicked(n) {
  this.props.dispatch(createQuickGameInit(n));
}

onCustomGameComplete(players, difficulty) {
  this.props.dispatch(createCustomGameInit(players, difficulty));
}

showMenu() {
  this.setState({ mode: null });
}
*/
// Ok what can I break? :wave:
  const onQuickGameClicked = () => {};
  const onCustomGameClicked = () => {};
  const state = {mode: null};
  return (
    <div className="setup">
      <div className="container">
        <h1 className="text-danger">Epidemic</h1>
        {state.mode === null &&
          <div className="menu">
            <Button bsSize="large" onClick={onQuickGameClicked}>Quick Start</Button>
            <Button bsSize="large" onClick={onCustomGameClicked}>Custom Game</Button>
          </div>
        }
        {/*this.state.mode === 'quick' &&
          <QuickGame
            onNumberOfPlayersPicked={this.onQuickNumberOfPlayersPicked}
            onBackClicked={this.showMenu} />
      */}
        {/*this.state.mode === 'custom' &&
          <CustomGame
            onComplete={this.onCustomGameComplete}
            onBackClicked={this.showMenu} />
      */}
      </div>
      {/*<Footer />*/}
      <img
        /*
          Prefetch the loading image for the loading screen
        */
        src={require('./../../assets/images/infection_rate.png')}
        className="hide" />
    </div>
  );
}

export default Setup;
