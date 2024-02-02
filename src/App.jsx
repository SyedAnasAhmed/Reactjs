// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



function Counterfunc() {

  let [counter, getcounter] = useState(0)

  // const state = useState(0)
  // console.log(state)

  var addfunc = () => {
    getcounter(counter + 1)
  }
  var minusfunc = () => {
    // if(counter > 0){
    //   getcounter(counter - 1)
    // }
    // else{
      
    // }
    getcounter(counter - 1)
  }



  return (
    <>
      <h1>{counter}</h1>
      <button onClick={addfunc}>Plus Counter</button>
      <button onClick={minusfunc}>Minus Counter</button>
    </>
  )
}

export default Counterfunc