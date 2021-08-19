import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="app">
            {notes.map((ele) => {
              return <Note title={ele.title} content={ele.content} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
