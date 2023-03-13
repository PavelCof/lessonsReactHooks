
import './App.css';
import React, {useState,useEffect} from 'react';




function App() {
const [type, setType]= useState("users")
const [data,setData]=useState([])
const [pos,setPos]=useState({x:0,y:0})
const mouseMoveHendler = event =>{
  setPos({
    x:event.clientX,
    y:event.clientY
  })
}
// useEffect(()=>{
//   console.log("render");
// })

// useEffect(()=>{
// console.log("type change", type);
// },[type])
useEffect(()=>{
  console.log("Компонент готов к работе");

  window.addEventListener('mousemove', mouseMoveHendler)
  return()=> {
    window.removeEventListener('mousemove',mouseMoveHendler)
  }
},[])

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))

  return ()=>{
    console.log("clean type");
  }
},[type])
  return (
    <div> 
      <h1>Рсурс:{type}</h1>
      <button onClick={()=>{setType("users")}} >Пользователи</button>
      <button onClick={()=>{setType("todos")}}>Todo</button>
      <button onClick={()=>{setType("posts")}}> Посты </button>
      
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
      <pre>{JSON.stringify(pos,null,2)}</pre>
    </div>
  );
}

export default App;
