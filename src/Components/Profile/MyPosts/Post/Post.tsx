import React from 'react';
import s from './Post.module.css'
import {PostType} from '../../../Redux/Type'

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img className={s.postAvatar}
                 src={props.avatarSRC}
                 alt=""/>
            {props.post}
            <p>post {props.id}</p>
            <div>
                <span>Like: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;