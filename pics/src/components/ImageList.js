import React from "react";
import "./ImageList.css";

import ImageCard from "./ImageCard";

class ImageList extends React.Component {
  render() {
    const content = this.props.images.map((image) => {
      return <ImageCard key={image.id} image={image}></ImageCard>;
    });

    return <div className="image-list">{content}</div>;
  }
}

export default ImageList;
