import React from 'react'
import './App.css';
class App extends React.Component
{
    constructor()
    {
        super();
        console.warn("Constructor");
        this.state ={
            name : "RAVI"
        }
    }
    componentDidMount()
    {
        console.warn("componentDidMount");
    }
    render()
    {
        console.warn("render");

        return(
            <div className='App'>
                <h1>Hello {this.state.name}</h1>
                <button onClick={()=>this.setState({name : "RAHUL"})}>Update Data</button>
            </div>
        )
    }
}
export default App1;