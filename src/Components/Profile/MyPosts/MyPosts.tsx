import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import  {PostPageType, PostType} from "../../Redux/Type";



const MyPosts = (props: PostPageType) => {

    let postComponents = props.posts.map(item => {
        return <Post post={item.post} likesCount={item.likesCount} avatarSRC={item.avatarSRC} id={item.id}/>
    })

    let newElementPost = React.createRef<HTMLTextAreaElement>()
    const onClickHandler = () => {
        let userPost = newElementPost.current?.value
        userPost && props.addPost(userPost)
    }


    return (
        <div className={s.content}>
            my posts
            <div>
                <textarea ref={newElementPost}></textarea>
                <button onClick={onClickHandler}>Add post</button>
            </div>

            <div className={s.posts}>
                {postComponents}
            </div>

        </div>

    )
}

export default MyPosts;