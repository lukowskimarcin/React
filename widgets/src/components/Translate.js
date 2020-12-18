/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

//  
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Select Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      ></Dropdown>

      <hr />
      <h3 className="ui header"></h3>

      <Convert text={text} language={language}></Convert>
    </div>
  );
};

export default Translate;
