import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TextDisplay extends Component {

  handleClick() {
    console.log("button clicked")
  }
   
render() {
      return (
        <div>
            {this.props.showText} 
            <button onClick={this.props.deleteLetter}>Delete a letter?</button>
        </div>
    );
  }
}

export default TextDisplay;
    