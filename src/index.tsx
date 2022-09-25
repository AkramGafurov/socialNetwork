import './index.css';
import state, {subscriber}from './Components/Redux/State'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RootPageType} from './Components/Redux/Type' 

const rerenderEntireTree = (state: RootPageType)=>{
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
  );

    root.render(
        <React.StrictMode>   
            <BrowserRouter> 
                <App state={state}/>
            </BrowserRouter>
        </React.StrictMode>
    );
    
}

rerenderEntireTree(state)
subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
