/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./ImageList.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    const height = this.imageRef.current.addEventListener(
      "load",
      this.setSpans
    );
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans: spans });
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
