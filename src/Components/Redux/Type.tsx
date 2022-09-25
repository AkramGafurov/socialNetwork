export type UserMessageType = {
    id: number,
    message: string,
}

export type DialogType = {
      id: number,
      name: string
  }

export type PostType = {
    post: string,
    likesCount: number,
    avatarSRC: string,
    id: number,
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
}

export type MessageType = {
    dialogs: Array<DialogType>,
    messages: Array<UserMessageType>,
    tempMessage:string,
}

export type MessagePageType = {
    messagePage: MessageType,
    addMessage: ()=>void,
    upDateNewUserMessage: (newMessage:string)=>void
}

export type RootPageType = {
    messagePage: MessageType,
    postPage: ProfilePageType
}

export type PostPageType = {
    posts: Array<PostType>
    addPost: (userPost:string)=>void
}



export type MyPostPageType = {
    postPage: ProfilePageType
    addPost: ()=>void
    upDateNewPostText: (newText:string)=>void
}

export type AppPropsType = {
    state: RootPageType,
}