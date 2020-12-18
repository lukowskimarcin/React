/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import Accoridon from "./components/Accoridon";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

// <Accoridon items={items}></Accoridon>
export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header></Header>

      <Route path="/">
        <Accoridon items={items} />
      </Route>

      <Route path="/list">
        <Search></Search>
      </Route>

      <Route path="/dropdown">
        <div>
          <button
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            Toggle Dropown{" "}
          </button>

          {showDropdown ? (
            <Dropdown
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
            ></Dropdown>
          ) : null}
        </div>
      </Route>

      <Route path="/translation">
        <Translate></Translate>
      </Route>
    </div>
  );
};
