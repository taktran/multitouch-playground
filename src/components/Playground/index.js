/*global Phaser:true */
import React, { Component } from 'react';
import Game from './playground';
import './playground.css';

class Playground extends Component {
  constructor() {
    super();

    const { toggleDebug } = Game({
      Phaser,
      backgroundColor: '#A2BDDE' // Sky blue
    });

    this.toggleDebug = toggleDebug;
  }
  render() {
    return <div>
      <button className='toggle-button'
        onClick={this.toggleDebug}>Toggle debug</button>
    </div>;
  }
}

export default Playground;
