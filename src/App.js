import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="whole">
            <p>Röörit auki</p>
            <div className="App">
    {/*                <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>*/}
                    <img src="putkenavaaja.jpg" className="putkimies"/>
    {/*                <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>*/}
            </div>
        </div>
    );
}

export default App;
