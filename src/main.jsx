import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './App'
import Header from './components/Header';
import Footer from './components/Footer';
import Counterfunc from './App';

// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



const root = document.getElementById("root");
const createRoot = ReactDOM.createRoot(root)
createRoot.render(
  <>
    {/* <Header />
    <Body />
    <Footer /> */}

  <Counterfunc/>



  </>
)

















