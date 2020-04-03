/* eslint-disable no-useless-constructor */
import React from 'react';
import FormGeneral from './FormGeneral';
import PreviewCard from './PreviewCard';


class Main extends React.Component {
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