
import './App.css';
import React, {useState} from 'react';




function App() {
  function computeInitCounter() {
    console.log("computeInitCounter...");
     return Math.trunc(Math.random() *20)
   }
   
   const [state, setState]=useState({
     title:"Счётчик",
     date:Date.now()
   })
  //const [counter, setCounter] = useState(0)
  //const [counter, setCounter] = useState(computeInitCounter)
  const [counter, setCounter] = useState(()=> {return computeInitCounter() })
  function increment() {
    // setCounter(counter+1)
    // setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
  }
  function dencrement() {
    setCounter(counter-1)
  }

  function updateTitle() {
    setState(prev=>{
      return{
        ...prev,
        title:"Новаое название"
      }
    })
  }
  return (
    <div> 
      <h1>Счётчик {counter}</h1>
      <button onClick={increment} className="">Добавить</button>
      <button onClick={dencrement}>Удалить</button>
      <button onClick={updateTitle}>Изменить название</button>
    <pre>{JSON.stringify(state,null,2)}</pre>
    </div>
  );
}

export default App;
