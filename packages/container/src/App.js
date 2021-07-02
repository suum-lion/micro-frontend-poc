import React, { lazy, Suspense } from "react";
import "./App.css";
import logo from "./logo.svg";

const MFE1Button = lazy(() => import("mfe3/Button"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Suspense fallback="Loading Button">
          <MFE1Button />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
