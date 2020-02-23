import React from 'react';
import {Header} from "./components/Header";
import {Services} from "./components/Services";
import {About} from "./components/About";

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
