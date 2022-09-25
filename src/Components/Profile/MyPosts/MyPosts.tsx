import React, {useState} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import  {ProfilePageType, PostType,MyPostPageType} from "../../Redux/Type";
import { ChangeEvent } from 'react';
import state from '../../Redux/State'


const MyPosts = (props: MyPostPageType) => {

    let postComponents = props.postPage.posts.map((item, index) => {
        return <Post key={index} post={item.post} likesCount={item.likesCount} avatarSRC={item.avatarSRC} id={item.id}/>
    })

    let newElementPost = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        let userPost = newElementPost.current?.value
        userPost && props.addPost()
    }

    const onPostChange = () => {
        let newText = newElementPost.current?.value
        newText && props.upDateNewPostText(newText)
    }

    return (
        <div className={s.content}>
            my posts
            <div>
                <textarea value={props.postPage.newPostText} onChange={onPostChange} ref={newElementPost} />
                <button onClick={onClickHandler}>Add post</button>
            </div>

            <div className={s.posts}>
                {postComponents}
            </div>

        </div>

    )
}

export default MyPosts;