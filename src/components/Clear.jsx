import React from "react";

import "../components/Clear.css";

const Clear = props => (
  <div className="clear-btn" onClick={() => props.handleClear(props.children)}>
    {props.children}
  </div>
);

export default Clear;
