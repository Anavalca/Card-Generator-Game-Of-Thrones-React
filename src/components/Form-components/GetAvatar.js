import React from 'react';

class GetAvatar extends React.Component {
  constructor(props) {
    super(props);

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

        />
      </React.Fragment>
    );
  }
}

export default GetAvatar;
