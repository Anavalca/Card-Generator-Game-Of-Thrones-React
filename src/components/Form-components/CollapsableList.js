/* eslint-disable no-useless-constructor */
import React from 'react';
import DesignForm from './DesignForm';
import FillForm from './FillForm';
// import ShareFormValidation from './Form-components/ShareFormValidation';
import CollapsableItem from './CollapsableItem';

class CollapsableList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel ">
        <CollapsableItem
          title="DISEÑA"
          styling="panel__coll btn-design"
          styleIcon="far fa-object-ungroup"
          handleCollapse = {this.props.handleCollapse}
          activePanel = {this.props.activePanel}
          id = 'collapse-1'
        >
          <button type="button" className="panel__coll btn-design">
            <i className="far fa-object-ungroup"></i>Diseña
          </button>
          <div
            className="panel__content panel__content--design display__none"
            id="form__design"
          >
            <DesignForm />
          </div>
        </CollapsableItem>



        <CollapsableItem
          title="RELLENA"
          styling="panel__coll font__form btn-fill"
          styleIcon="far fa-keyboard"
          handleCollapse = {this.props.handleCollapse}
          activePanel = {this.props.activePanel}
          id = 'collapse-2'
        >

          <button type="button" className="panel__coll font__form btn-fill"><i className="far fa-keyboard"></i>Rellena</button>
          <div className="panel__content display__none" id="form__fill">

        <FillForm />
        </div>
        </CollapsableItem>


        <CollapsableItem
          title="COMPARTE"
          styling="panel__coll btn-share"
          styleIcon="fas fa-share-alt"
          handleCollapse = {this.props.handleCollapse}
          activePanel = {this.props.activePanel}
          id = 'collapse-3'
        />

        {/* // Parte de comparte */}
      </div>
    );
  }
}

export default CollapsableList;
