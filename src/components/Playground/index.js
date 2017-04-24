/*global Phaser:true */
import React, { Component } from 'react';
import Game from './playground';
import './playground.css';

class Playground extends Component {
  constructor() {
    super();

    const { toggleDebug, reset } = Game({
      Phaser,
      backgroundColor: '#A2BDDE' // Sky blue
    });

    this.toggleDebug = toggleDebug;
    this.reset = reset;
  }
  render() {
    return <div>
      <button className='reset-button'
        onClick={this.reset}>Reset</button>
      <button className='toggle-button'
        onClick={this.toggleDebug}>Toggle debug</button>
    </div>;
  }
}

export default Playground;
