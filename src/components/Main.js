import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ColorChange from './ColorChange'
import TextInput from './TextInput'
// import './<StyleName>.css'

class Main extends Component {
    state = { color: "green" }

    // is compiled too...
    // constructor(props) {
    //     super(props);
    
    //     this.state = { color : 'red' };
    //   }

render() {
      return (
        <div>
            <ColorChange color = {this.state.color} />
        </div>
    );
  }
}

export default Main;