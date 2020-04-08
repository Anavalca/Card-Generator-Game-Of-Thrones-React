/* eslint-disable no-useless-constructor */
import React from 'react';
import FormGeneral from './FormGeneral';
import PreviewCard from './PreviewCard';


class Main extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      photo:''
    }

    this.handleImage = this.handleImage.bind(this);
  }


handleImage(target){
  this.setState({
    file:URL.createObjectURL(target.files[0])
  })
}


    render() {
      return (
        <main className="page__home--main container">
          <PreviewCard />
          <FormGeneral/>
        </main>
      );
    }
}


export default Main;