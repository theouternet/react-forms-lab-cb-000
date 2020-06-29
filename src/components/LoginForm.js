import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }


handleLogin = event => {
  this.setState({
    username: '',
    password: ''
  })
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  if (!this.state.username || !this.state.password)
  return 
    this.props.onSubmit(this.state)
  })
}



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
<<<<<<< HEAD
            <input id="username" name="username" type="text" onChange={this.handleChange} />
=======
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
>>>>>>> 6d8e00e88639916d13ab780d4d2944b0c05981eb
          </label>
        </div>
        <div>
          <label>
            Password
<<<<<<< HEAD
            <input id="password" name="password" type="password" onChange={this.handleChange} />
=======
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
>>>>>>> 6d8e00e88639916d13ab780d4d2944b0c05981eb
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;