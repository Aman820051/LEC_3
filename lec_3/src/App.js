import React from 'react'
import './App.css';
import { useState } from 'react';
function App() {
    const [status,setStatus] = useState(false);

    return(

      <div className='App'>
        {
          status ? <h1>WELCOME</h1> : null
        }
        <h1>REACT</h1>

        <button style={{marginRight:'5px'}} onClick={()=>setStatus(false)}>Hide</button>
        <button style={{marginRight:'5px'}} onClick={()=>setStatus(true)}>Show</button>
        <button style={{marginRight:'5px'}} onClick={()=>setStatus(!status)}>Toggle</button>

      </div>

    )
}

export default App;
