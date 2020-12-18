import React from "react";


function firstElement(data){
    if(Array.isArray(data)) {
        return data[data.length - 1]
    } else  {
        return data
    }
}

const ApprovalCard = (props) => {
    console.log(props);
  return (
    <div className="ui card">
      <div className="content">
          {firstElement(props.children)}
      </div>

      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
