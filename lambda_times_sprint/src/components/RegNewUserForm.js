import React from 'react';
import axios from 'axios';

class SignUpForm extends React.Component {
  state = {
    usersEmail: '',
    password: ''
  };

  registerUser = e => {
    e.preventDefault();

    console.log(this.state);

    axios
      .post('http://localhost:9900/api/register', this.state)

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
      <form onSubmit={this.registerUser}>
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
          <button type="submit">Register</button>
        </div>
      </form>
    )
  }
}

export default SignUpForm;