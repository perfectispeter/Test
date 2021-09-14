import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CustomRoute } from "./router";
import TestContext from "./page/testContext";

ReactDOM.render(
  <TestContext.Provider
    value={{
      userType: "admin",
    }}
  >
    <CustomRoute />
  </TestContext.Provider>,
  document.getElementById("root")
);
