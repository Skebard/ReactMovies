import React from "react";

//components
import Header from './components/Header';
import Home from './pages/Home';


//styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (<div 
    className="App">
      <Header />
      <Home/>
    Start here.
    <GlobalStyle />
    </div>
  );
}

export default App;
