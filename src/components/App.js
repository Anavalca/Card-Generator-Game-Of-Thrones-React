/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/App.scss';
import DesignForm from './Form-components/DesignForm'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Awesome Profile Cards in process.
          </p>
          <DesignForm/>
        </header>
        <Header />
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;
