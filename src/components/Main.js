/* eslint-disable no-useless-constructor */
import React from 'react';
import FormGeneral from './FormGeneral';
import PreviewCard from './PreviewCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleIconId = this.handleIconId.bind(this)
    this.state = {
        iconEmail: 'opacity',
        iconPhone: 'opacity',
        iconLinkedin: 'opacity',
        iconGithub: 'opacity',
    }
  }

  handleIconId(inputId){
  
    if(inputId === 'email') {
      this.setState({iconEmail: ''});
      console.log(this.state.iconEmail)
    }
    if(inputId === 'phone') {
      this.setState({iconPhone: ''});
      console.log(this.state.iconPhone)
    }
    if(inputId === 'linkedin') {
      this.setState({iconLinkedin: ''});
      console.log(this.state.iconLinkedin)
    }
    if(inputId === 'github') {
      this.setState({iconGithub: ''});
      console.log(this.state.iconGithub)
    }
    
  }

  render() {
    return (
      <main className="page__home--main container">
        <PreviewCard/>
        <FormGeneral handleIconId={this.handleIconId}/>
      </main>
    );
  }
}


export default Main;