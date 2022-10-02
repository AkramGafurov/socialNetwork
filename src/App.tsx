import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AppPropsType, } from "./Components/Redux/Type"



function App(props: AppPropsType) {
    
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="profile" element={<Profile postPage={props.store.getState().postPage} addPost={props.store.addPost.bind(props.store)} upDateNewPostText={props.store.upDateNewPostText.bind(props.store)}/>}/>

                        <Route path="dialogs" element={<Dialogs messagePage={props.store.getState().messagePage} addMessage={props.store.addMessage.bind(props.store)} upDateNewUserMessage={props.store.upDateNewUserMessage.bind(props.store)}/>}/> 
                          
                    </Routes>
                </div>
            </div>
    );
}

export default App;
