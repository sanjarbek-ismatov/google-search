import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Google from "./searchComponent/google";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Google />} />
          <Route path="/" index element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
