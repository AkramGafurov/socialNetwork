import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AppPropsType, RootPageType} from './Components/Redux/Type'

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

export default rerenderEntireTree