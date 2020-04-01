/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import '../stylesheets/layouts/_header.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;
