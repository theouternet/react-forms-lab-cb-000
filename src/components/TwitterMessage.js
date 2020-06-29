import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <strong>Your message:</strong>
        <input type="text" 
               onChange={event => this.setState({message: event.target.value})}
               value ={this.state.message}/>
               {this.props.maxChars-this.state.message.length}      
=======
       <input type="text" 
               onChange={event => this.setState({message: event.target.value})}
               value ={this.state.message}/>
               {this.props.maxChars-this.state.message.length}   
>>>>>>> 6d8e00e88639916d13ab780d4d2944b0c05981eb
      </div>
    );
  }
}

export default TwitterMessage;