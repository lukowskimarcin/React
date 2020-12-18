import './SeasonDisplay.css'
import React from "react";

class SeasonDisplay extends React.Component {
  seasonConfig = {
    summer: {
      text: "Summer time :)",
      icon: "sun",
    },
    winter: {
      text: "Burr, it is chilly",
      icon: "snowflake",
    },
  };

  getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  };

  render() {
    const season = this.getSeason(this.props.lat, new Date().getMonth());
    const text = this.seasonConfig[season].text;
    const iconName = this.seasonConfig[season].icon;

    return (
      <div  className={`season-display ${season} `} > 
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
      </div>
    );
  }
}

export default SeasonDisplay;
