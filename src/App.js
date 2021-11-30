import React, { useState } from 'react'
import './App.css';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  TextField: {
    color: 'white',
    borderRadius: 14,

  }
})

const App = ()=>{
  const classes = useStyles()
  const [katetebi, setKateti] = useState({
    kateti1: 0,
    kateti2: 0,
    hipotenuza: 0,
  })

  const handleClick = () =>{
    const hipotenuza = Math.sqrt(Math.pow(katetebi.kateti1, 2) + Math.pow(katetebi.kateti2, 2))
    setKateti({...katetebi, hipotenuza: hipotenuza})
  }
  console.log(katetebi)
  return (
    <div className="App">
      <div className="container">
        <h1>ჰიპოტენუზის კალკულატორი</h1>
        <div className="form">
          <TextField onChange={(e) => setKateti({...katetebi, kateti2: parseInt(e.target.value) })} className={classes.TextField}  id="outlined-basic" label="პირველი კათეტი" variant="outlined"/>
          <TextField onChange={(e) => setKateti({...katetebi, kateti1: parseInt(e.target.value) })} className={classes.TextField} id="outlined-basic" label="მეორე კათეტი" variant="outlined"/>
        </div>
        <button onClick={handleClick} className="button">გამოიანგარიშე</button>
        <div className={katetebi.hipotenuza > 0 ? "hipotenuza" : "hipotenuza hidden"}>
          <p className="p">ჰიპოტენუზა: {katetebi.hipotenuza}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
