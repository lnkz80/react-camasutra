let store = {
  _getPathToAvatars() {
    const _pathToAvatars = "./img/usersAvatars/";
    return _pathToAvatars;
  },
  _state: {
    usrs: [
      {
        id: 0,
        name: "Alex",
        fullname: "Alessandro Linkuzzo",
        avatar: _getPathToAvatars() + "alex.png",
      },
      {
        id: 1,
        name: "Steve",
        fullname: "Steve Jobs",
        avatar: this._pathToAvatars + "steve.png",
      },
      {
        id: 2,
        name: "John",
        fullname: "John Travolta",
        avatar: this._pathToAvatars + "john.png",
      },
      {
        id: 3,
        name: "Bruce",
        fullname: "Bruce Lee",
        avatar: this._pathToAvatars + "bruce.png",
      },
      {
        id: 4,
        name: "Stella",
        fullname: "Stella Artois",
        avatar: this._pathToAvatars + "stella.png",
      },
      {
        id: 5,
        name: "Samantha",
        fullname: "Samantha Fox",
        avatar: this._pathToAvatars + "samantha.png",
      },
      {
        id: 6,
        name: "Sarah",
        fullname: "Sarah Connor",
        avatar: this._pathToAvatars + "sarah.png",
      },
      {
        id: 7,
        name: "Rick",
        fullname: "Rick Grimes",
        avatar: this._pathToAvatars + "rick.png",
      },
    ],
    profilePage: {
      postsData: [
        {
          id: 1,
          header: "The first post on this page",
          message: "Hi, how are you?",
          postimg: "./img/postimg/hello.jpg",
          date: "12-12-2019",
        },
        {
          id: 2,
          header: "Theweather is fine",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: "14-12-2019",
        },
        {
          id: 3,
          header: "Happy New 2019 Year!!!",
          message:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!!!",
          date: "31-12-2019",
        },
        {
          id: 4,
          header: "Go to the football",
          postimg: "./img/postimg/gerrard.jpg",
          message:
            "When you walk through a storm/Hold your head up high/And dont be afraid of the dark/At the end of a storm/Theres a golden sky/And the sweet silver song of a lark”. These lyrics, from the song You’ll Never Walk Alone, were composed in 1945 and acted as a comfort to families suffering during the Second World War. The song ends “walk on with hope in your heart and youll never walk alone",
          date: "22-02-2020",
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        { id: 0, name: "Alex", act: true },
        { id: 1, name: "Steve", act: false },
        { id: 2, name: "John", act: false },
        { id: 3, name: "Bruce", act: false },
        { id: 4, name: "Stella", act: false },
        { id: 5, name: "Samanta", act: false },
        { id: 6, name: "Sarah", act: false },
        { id: 7, name: "Rick", act: false },
      ],
      // usr:false - me; usr:true - another user
      // , avatar: "./img/usr_avatar.jpg"
      //, avatar: "./img/usersAvatars/unknwnUsr.png"
      messagesData: [
        {
          id: 1,
          usr: false,
          mess: "Hello",
          avatar: this._pathToAvatars + "alex.png",
        },
        {
          id: 2,
          usr: true,
          mess: "Hi",
          avatar: this._pathToAvatars + "sarah.png",
        },
        {
          id: 4,
          usr: false,
          mess: "What are you doing?",
          avatar: this._pathToAvatars + "alex.png",
        },
        {
          id: 7,
          usr: false,
          mess: "Hey!",
          avatar: this._pathToAvatars + "alex.png",
        },
        {
          id: 3,
          usr: true,
          mess: "Nothing? Why are you asking?",
          avatar: this._pathToAvatars + "sarah.png",
        },
        {
          id: 5,
          usr: false,
          mess: "Where are you from?",
          avatar: this._pathToAvatars + "alex.png",
        },
        {
          id: 6,
          usr: true,
          mess: "NorthWest",
          avatar: this._pathToAvatars + "sarah.png",
        },
      ],
      newMessageText: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      header: "Test",
      message: this._state.profilePage.newPostText,
      postimg: "./img/postimg/test.jpg",
      date: "19-03-2020",
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 7,
      usr: false,
      mess: this._state.dialogsPage.newMessageText,
      avatar: this._pathToAvatars + "alex.png",
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updatePostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  updateMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
