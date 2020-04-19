import React from 'react';

class GetAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.fileInput = React.createRef(); 
    this.handleFile = this.handleFile.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
    
  }

  handleFile(){
    this.fileInput.current.click();
  }

  uploadImage(event) {
    event.preventDefault();
    const myFile = event.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    this.setState({
      photo: this.fr.result
    })
    this.props.updateAvatar(this.fr.result);

  }


  render() {
    
    return (
      <React.Fragment>
        <label htmlFor="fillButton">
          Imagen de Perfil
        </label>
        <button
          id="fillButton"
          type="button"
          className="button__hover--styles"
          onClick={this.handleFile}
        >
          Añadir imagen
        </button>
        <input
          type="file"
          name="photo"
          id="img-selector"
          className="hidden-field"
          ref={this.fileInput}
          onChange={this.uploadImage} required
        />
      </React.Fragment>
    );
  }
}

export default GetAvatar;
