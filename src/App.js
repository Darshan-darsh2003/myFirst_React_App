import "./App.css";
import Header from "./components/Header";
import "./assets/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { Games } from "./components/Games";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <Home />
              </React.Fragment>
            }
          ></Route>

          <Route
            exact
            path="/games"
            element={
              <React.Fragment>
                <Games />
              </React.Fragment>
            }
          ></Route>

          <Route exact path="/movies" element={<Movies />}></Route>

          <Route
            exact
            path="/education"
            element={<React.Fragment></React.Fragment>}
          ></Route>

          <Route
            exact
            path="/entertainment"
            element={<React.Fragment></React.Fragment>}
          ></Route>

          <Route
            exact
            path="/lifestyle"
            element={<React.Fragment></React.Fragment>}
          ></Route>

          <Route
            exact
            path="/health"
            element={<React.Fragment></React.Fragment>}
          ></Route>

          <Route
            exact
            path="/music"
            element={<React.Fragment></React.Fragment>}
          ></Route>

          <Route
            exact
            path="/weather"
            element={<React.Fragment></React.Fragment>}
          ></Route>

          <Route
            exact
            path="/kids"
            element={<React.Fragment></React.Fragment>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
