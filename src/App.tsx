import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatScreen from "./components/ChatScreen";
import Header from "./components/Header";

function App() {
  return (
    <div className="App ">
      <Header />
      <ChatScreen />
    </div>
  );
}

export default App;
