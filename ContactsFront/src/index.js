import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";

/*onst root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));


