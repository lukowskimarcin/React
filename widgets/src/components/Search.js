import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ items }) => {
  const [term, setTerm] = useState("pike");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  const renderedResults = results.map(({ pageid, title, snippet }) => {
    return (
      <div className="item" key={pageid}>
        <div className="content">
          <div className="right floated content">
            <a
              href={`https://en.wikipedia.org?curid=${pageid}`}
              className="ui button"
            >
              Go
            </a>
          </div>
          <div className="header">{title}</div>
          <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="term">Enter Search Term</label>
          <input
            value={term}
            name="term"
            type="text"
            className="input"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
