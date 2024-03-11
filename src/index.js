import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

window.onload = () => {
  document.getElementById("shock").addEventListener("click", () => {
    const img = document.querySelector("img");
    if (img.classList.contains("App-logo")) {
      img.classList.remove("App-logo");
      img.classList.add("image-animation");
    } else {
      img.classList.add("App-logo");
      img.classList.remove("image-animation");
    }
  });
};
