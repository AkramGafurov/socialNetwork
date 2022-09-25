import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { DialogType, MessageType, PostType, ProfilePageType, MessagePageType, RootPageType, AppPropsType} from "./Components/Redux/Type"
import {addPost, upDateNewPostText, addMessage, upDateNewUserMessage} from './Components/Redux/State'



function App(props: AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                      
                        <Route path="profile" element={<Profile postPage={props.state.postPage} addPost={addPost} upDateNewPostText={upDateNewPostText}/>}/>

                        <Route path="dialogs" element={<Dialogs messagePage={props.state.messagePage} addMessage={addMessage} upDateNewUserMessage={upDateNewUserMessage}/>}/> 
                          
                    </Routes>
                </div>
            </div>
    );
}

export default App;
