import React from "react";
import ReactDOM from "react-dom";
import App from './App'
// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if we are in dev mode and isolation call mount inmediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// we are running throuhg container we should export the mount function
export { mount };
