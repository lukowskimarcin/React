/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  onClick = (event) => {
    this.props.onVideoSelect(this.props.video);
  };

  render() {
    return (
      <div onClick={this.onClick} className="video-item item">
        <img
          src={this.props.video.snippet.thumbnails.medium.url}
          className="ui image"
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
