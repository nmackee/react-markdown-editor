import React from "react";

const defaultContext = {
  markdonText: "",
  setMarkdownText: () => {}
};

export default React.createContext(defaultContext);
