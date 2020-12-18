import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const content = this.props.videos.map((item) => {
      return <VideoItem 
        key={item.id.videoId} 
        video={item}
        onVideoSelect={this.props.onVideoSelect}
        ></VideoItem>;
    });

    return <div className="ui relaxed divided list">{content}</div>;
  }
}

export default VideoList;
