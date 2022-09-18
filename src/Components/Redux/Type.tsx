export type DialogType = {
      id: number,
      name: string
  }

export type MessageType = {
    id: number,
    message: string
}

export type PostType = {
    post: string,
    likesCount: number,
    avatarSRC: string,
    id: number,
}

export type PostPageType = {
    posts: Array<PostType>
    addPost: (userPost:string)=>void
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>,
}

export type AppType = {
    messagePage: DialogPageType,
    postPage: PostPageType
}

export type StateType= {
  state: AppType
  addPost: (userPost:string)=>void
}