import React from 'react';
import axios from 'axios';

class LogInForm extends React.Component {
  state = {
    usersEmail: '',
    password: '',
  };

  userLogIn = event => {
    event.preventDefault();
  
    console.log(this.state);
    axios
      .post('http://localhost:9900/api/login', this.state)

      .then(response => {
        console.log(response.data);
        localStorage.setItem('jwt', response.data.token);
        this.props.history.push('/');
        })
        
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.userLogIn}>
        <div>
          <label htmlFor="usersEmail">Users Email</label>
          <input
            name="usersEmail"
            value={this.state.usersEmail}
            onChange={this.handleInputChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    );
  }
}
export default LogInForm;