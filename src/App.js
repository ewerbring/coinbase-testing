import './App.css';
import React, {useState, useEffect} from 'react';
import Coin from "./components/Coin"


function App() {

// const [state, setState] = useState({count: 4, theme:"green"})
// const count = state.count
// const theme = state.theme

const [resourceType, setResourceType] = useState("posts")
console.log("rendered")
useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then(response => response.json())
  .then(json => console.log(json))
}, [resourceType])
// function decrementCount(){
//   // setCount(prevCount => prevCount -1)
//   setState(prevState => {
    
//     if (count===6){
//       return{ count: prevState.count -1, theme:"yellow"}}
//       else{      return{...prevState, count: prevState.count -1}}
//     }
      
    
//   )
// }
// function incerementCount(){
//   // setCount(prevCount => prevCount +1)
//   setState(prevState => {return{ count: prevState.count +1, theme:prevState.theme}}
//   )
// }

  return (
    <div className="App">
    {/* <button onClick={decrementCount}>
      -
    </button>
    {count}
    {theme}
    <button onClick={incerementCount}>
      +
    </button> */}
    <button onClick={()=>setResourceType("users")}>users</button>
    <button onClick={()=>setResourceType("posts")}>posts</button>
    <button onClick={()=>setResourceType("comments")}>comments</button>
    {resourceType}
    <Coin/>
    </div>
  );
}

export default App;
