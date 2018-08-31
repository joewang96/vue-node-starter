import React, { Component } from 'react';
import '../styles/app.scss';
import ReactImage from '../images/react.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    // example of fetching from Express API - modify endpoints in /src/server/
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <img
          src={ReactImage}
          alt="react"
          style={{ width: '100%', maxWidth: 300 }}
        />
      </div>
    );
  }
}
