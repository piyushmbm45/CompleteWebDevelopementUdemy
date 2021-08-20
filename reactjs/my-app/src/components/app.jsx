import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Createarea from "./createarea";

function App() {
  const [inputArray, setinputArray] = useState([]);
  function addNote(note) {
    setinputArray((preValue) => {
      return [...preValue, note];
    });
  }

  function deleteNote(id){
   setinputArray(preValue=>{
     return preValue.filter((note,index)=>{
       return index !== id;
     })
   })
  }


  return (
    <div>
      <Header />
      <Createarea onAdd={addNote} />
      {inputArray.map((ele, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={ele.title}
            content={ele.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
