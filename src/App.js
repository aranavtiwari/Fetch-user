import React, {useState} from "react";
import Users from './Users'
import './App.css'



const App = () => {
  const [option, setOption] = useState()
  const [select, setSelect] = useState()
  const rnd = Math.floor(Math.random() * 5) - 0;

  const optionSelect = (event) => {
    event.preventDefault();
    setSelect(option)
    setOption('')
  }

  const optionChange = (event) => {
    setOption(event.target.value)
  }

  return(
    <div>
      <div className="form">
      <form  onSubmit={optionSelect}>
        <input type='text' value={option} placeholder="Enter number between 1 to 12" onChange={optionChange}/>
        <span className="highlight"></span>
        <span className="bar"></span>
        <button className="button " type='submit'>Select</button>
        
      </form>
      </div>
      
      <Users opt={select} rnd ={rnd} />

      
    </div>
  )
}

export default App;