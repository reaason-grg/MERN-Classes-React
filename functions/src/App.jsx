// import React from 'react'

// const App = () => {
//   function sum(a,b){
//     console.log(a+b);
//   }
//   function btnClick(){
//     console.log("btn is clicked")
//   }
//   return (
//     <div>
//       <button onClick={()=>{
//         console.log("btn is clicked");
//         sum(4,7); 
//       }}>Click Here</button>
//     </div>
//   )
// }

// export default App


// useState HOOK-----------------------------------------------//

// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   // let count=0;
//   let [count, setCount]=useState(0);

//   function increment(){
//     if(count<=10){
//     setCount((prev)=>prev+1);
//     console.log(count);
//     }
//   }
//    function decrement(){
//     if(count>0){
//     console.log(count);
//     setCount((prev)=>prev-1);
//     }
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Add</button>
//       <button onClick={decrement}>Sub</button>
  
//     </div>
//   )
// }

// export default App



// Two-way Binding------------------------------------------//
import React from 'react'
import { useState } from 'react';

const App = () => {
  const[name,setName]=useState("");
  function handleSubmit(e){
    e.preventDefault();
    console.log("Form is submitted")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App