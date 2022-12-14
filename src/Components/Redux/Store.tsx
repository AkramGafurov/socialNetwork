// import { DialogType, MessageType, PostType, MessagePageType, RootPageType} from "./Type"

// let rerenderEntireTree = (state: RootPageType)=>{}

// const state: RootPageType = {
//         messagePage: {
//         dialogs: [
//             {id: 1, name: 'Ivan'},
//             {id: 2, name: 'Marina'},
//             {id: 3, name: 'Sasha'},
//             {id: 4, name: 'Kate'},
//             {id: 5, name: 'John'}
//         ],
//         messages: [
//             {id: 1, message: 'Hello!'},
//             {id: 2, message: 'Hi!'},
//             {id: 3, message: 'Hi everyone. How is you react?'},
//             {id: 4, message: 'Fine'},
//             {id: 5, message: 'Hello there'},
//         ],
//         tempMessage: ''
//         },

//         postPage: {
//             posts: [
//                 {
//                     post: 'Live For Nothing, Or Die For Something',
//                     likesCount: 5,
//                     avatarSRC: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sylvester_Stallone.jpg/220px-Sylvester_Stallone.jpg",
//                     id: 1,
//                 },
//                 {
//                     post: 'I\'ll be back',
//                     likesCount: 4,
//                     avatarSRC: "https://www.theplace.ru/archive/00_icons/631_icon_128.jpg",
//                     id: 2,
//                 },
//                 {
//                     post: 'Yippie-Kai-Yay, Motherf*****r!',
//                     likesCount: 5,
//                     avatarSRC: "https://i0.wp.com/onlinelivedailynews.com/wp-content/uploads/2022/03/Bruce-Willis-Images-13.png?resize=426%2C541&ssl=1",
//                     id: 3,
//                 },
//             ],
//             newPostText: 'test', 
//         },
//         // sidebar:{}
// }

// // -------обработка постов-------
// // функция добавления постов в настену/в state

// export const addPost=()=>{
//     let newPost: PostType = {
//         post: state.postPage.newPostText,
//         likesCount: 0,
//         avatarSRC: "https://img.kupigolos.ru/hero/5cdafe4c30ac5.png?p=bh&s=13a8cd7af352f92aa8770693dc868667",
//         id: 1,
//     }
//     state.postPage.posts.push(newPost);
//     state.postPage.newPostText='';
//     rerenderEntireTree(state)
// }

// // функция отследивания ввода в textArea

// export const upDateNewPostText =(newText:string)=>{
//     state.postPage.newPostText = newText
//     rerenderEntireTree(state)
// }


// // -------сообщения-------

// // функция добавления постов в настену/в state
// export const addMessage = ()=>{

//     let chatUser = {id: 1, name: 'Sasha'};
//     state.messagePage.dialogs.push(chatUser);

//     let userMessage = {id: 0, message: state.messagePage.tempMessage};

//     state.messagePage.messages.push(userMessage);
//     state.messagePage.tempMessage='';
//     rerenderEntireTree(state);
// }

// export const upDateNewUserMessage =(newMessage:string)=>{
//     state.messagePage.tempMessage = newMessage
//     rerenderEntireTree(state)
// }   

// export const subscribe=(observer: (state: RootPageType)=> void)=>{
//     rerenderEntireTree=observer;
// }

// // export const subscriber=(observer: (state: RootPageType)=> void)=>{return observer}

// export default state



// //    ---------------------------------------

// let store = {
//     _subscriber() {
//         console.log('no subscribers (observers)')
//     },
//     _state: {
//         firstName: 'it-incubator.by',
//         lastName: 'it-kamasutra.com'
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._subscriber = observer;
//     },
//     setFirstName(value) {
//         // send ajax to server
//         this._state.firstName = value;
//         this._subscriber();
//     }
// }
// // store._state


// let state = store.getState();
// store.setFirstName('samuraiJS.com');
// state = store.getState();

// let subscriber = () => {
//     let state = store.getState();
//     renderPage(state);
// };

// store.subscribe(subscriber);

// store.setFirstName('youtube.com');



import {RootPageType, PostType, StoreType} from "./Type"
let store: StoreType = {
    _subscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        messagePage: {
        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Marina'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Kate'},
            {id: 5, name: 'John'}
        ],
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'Hi!'},
            {id: 3, message: 'Hi everyone. How is you react?'},
            {id: 4, message: 'Fine'},
            {id: 5, message: 'Hello there'},
        ],
        tempMessage: ''
        },

        postPage: {
            posts: [
                {
                    post: 'Live For Nothing, Or Die For Something',
                    likesCount: 5,
                    avatarSRC: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sylvester_Stallone.jpg/220px-Sylvester_Stallone.jpg",
                    id: 1,
                },
                {
                    post: 'I\'ll be back',
                    likesCount: 4,
                    avatarSRC: "https://www.theplace.ru/archive/00_icons/631_icon_128.jpg",
                    id: 2,
                },
                {
                    post: 'Yippie-Kai-Yay, Motherf*****r!',
                    likesCount: 5,
                    avatarSRC: "https://i0.wp.com/onlinelivedailynews.com/wp-content/uploads/2022/03/Bruce-Willis-Images-13.png?resize=426%2C541&ssl=1",
                    id: 3,
                },
            ],
            newPostText: '', 
        },
        // sidebar:{}
    },
    addPost() {
        let newPost: PostType = {
            post: this._state.postPage.newPostText,
            likesCount: 0,
            avatarSRC: "https://img.kupigolos.ru/hero/5cdafe4c30ac5.png?p=bh&s=13a8cd7af352f92aa8770693dc868667",
            id: 1,
        }
        this._state.postPage.posts.push(newPost);
        this._state.postPage.newPostText='';
        this._subscriber()
    },
    upDateNewPostText (newText:string) {               
        this._state.postPage.newPostText = newText;
        this._subscriber();
    },
    addMessage() {

        let chatUser = {id: 1, name: 'Sasha'};
        this._state.messagePage.dialogs.push(chatUser);
    
        let userMessage = {id: 0, message: this._state.messagePage.tempMessage};
    
        this._state.messagePage.messages.push(userMessage);
        this._state.messagePage.tempMessage='';
        this._subscriber()
    },
    upDateNewUserMessage (newMessage:string) {
        this._state.messagePage.tempMessage = newMessage
        this._subscriber()
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
}
// store._state
export default store;
