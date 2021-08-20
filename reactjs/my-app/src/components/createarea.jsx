import React, { useState } from "react";

function Createarea(props) {

const [input, setInput] = useState({
    title: "",
    content: ""
})

function handleChange(event){
    const {name,value} = event.target
    setInput(preValue=>{
        return {...preValue,[name]:value}
    })
}

function handleSubmit(){
    props.onAdd(input)
    setInput({
        title:"",
        content: ""
    })
}

  return (
    <div>
      <form onSubmit={event=>event.preventDefault()}>
        <input onChange={handleChange} name="title" placeholder="new title" value={input.title}/>
        <textarea onChange={handleChange} name="content" placeholder="add content" rows="3" value={input.content}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default Createarea;
