import { useState, useEffect } from "react";

const Route = ({ path, children }) => {

  const [curentPath, setCurentPath] = useState(window.location.pathname);


  useEffect(() => {
    const onLocationChange = () => {
      console.log("location change");
      setCurentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return curentPath === path ? children : null;
};

export default Route;
