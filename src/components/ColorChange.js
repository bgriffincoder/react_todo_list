import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './<StyleName>.css'

class ColorChange extends Component {
render() {
      return (
        <div style={{background: this.props.color }}>
            <h1>Hello world</h1>
        </div>
    );
  }
}

export default ColorChange;