import React from 'react';
import './App.css';
import Header from "./Header";
import AdDesigner from "./AdDesigner";
import Votes from "./Votes"

function App() {
  return (
    <div className="App">
        <Header headerText="Chonky Cats' Ice Cream" user="Chirpus"/>
        <AdDesigner/>
        <Votes numberOfVotes={0} selected={false}/>


    </div>
  );
}

export default App;
