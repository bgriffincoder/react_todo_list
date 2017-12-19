import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextDisplay from './TextDisplay'

class TextInput extends Component {
    state = { inputText: "" }
    change = ev => this.setState({
        inputText: ev.target.value
    });
    deleteLetter = ev => this.setState({
        inputText: this.state.inputText.slice(0, -1)
    })
    
    // is compiled too...
    // constructor(props) {
    //     super(props);
    
    //     this.state = { inputText : "" };
    //   }

    //   function change(ev) {
    //     this.setState({ text: ev.target.value });
    //   }
    

render() {
      return (        
        <div>
            <input
                type="text"
                placeholder="This is going to be text"
                value={this.state.inputText}
                onChange={this.change}
             />
            <TextDisplay showText={this.state.inputText} deleteLetter={this.deleteLetter} />
        </div>
    );
  }
}

export default TextInput;
    