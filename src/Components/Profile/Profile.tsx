import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType,MyPostPageType} from '../Redux/Type'

const Profile = (props: MyPostPageType) => {
   
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postPage={props.postPage} addPost={props.addPost} upDateNewPostText={props.upDateNewPostText}/>
        </div>
    )
}

export default Profile;