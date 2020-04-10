/* eslint-disable no-useless-constructor */
import React from 'react';
import FormGeneral from './FormGeneral';
import PreviewCard from './PreviewCard';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handlePalette = this.handlePalette.bind(this);

    this.state= {
        palette: '1',
    };
  }

  handlePalette(data) {
    this.setState({ palette: data})
  }
  
    render() {
      return (
        <main className="page__home--main container">
          <PreviewCard colorPaletteData = {this.state.palette} />
          <FormGeneral
          paletteHandler={this.handlePalette}
          colorPaletteData = {this.state.palette} 
          />
        </main>
      );
    }
}


export default Main;