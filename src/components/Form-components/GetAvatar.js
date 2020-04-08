import React from 'react';

class GetAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  
  handleImageChange(event) {
    event.preventDefault();
    this.props.handleImage(event.target);
  }




  render() {
    return (
      <React.Fragment>
        <label htmlFor="fillButton">
          Imagen de Perfil<span>*</span>
        </label>
        <button
          id="fillButton"
          type="button"
          className="button__hover--styles"
        >
          Añadir imagen
        </button>
        <input
          type="file"
          name="photo"
          id="img-selector"
          className="hidden-field"
          ref={this.fileInput}
          onChange={this.handleImageChange}
        />
      </React.Fragment>
    );
  }
}

export default GetAvatar;
