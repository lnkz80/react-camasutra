let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi, how are you?", user: "Steve" },
      { id: 2, message: "Hello, I'm fine", user: "Alex" },
      { id: 3, message: "What are you doing?", user: "Sarah" },
      { id: 4, message: "So what???", user: "Alex" }
    ]
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Steve", act: false },
      { id: 2, name: "John", act: false },
      { id: 3, name: "Bruce", act: false },
      { id: 4, name: "Alex", act: true },
      { id: 5, name: "Stella", act: false },
      { id: 6, name: "Samanta", act: false },
      { id: 7, name: "Sarah", act: false },
      { id: 8, name: "Rick", act: false }
    ],
    // usr:false - me; usr:true - another user
    // , avatar: "./img/usr_avatar.jpg"
    //, avatar: "./img/usersAvatars/unknwnUsr.png"
    messagesData: [
      { id: 1, usr: false, mess: "Hello", avatar: "./img/usr_avatar.jpg" },
      {
        id: 2,
        usr: true,
        mess: "Hi",
        avatar: "./img/usersAvatars/unknwnUsr.png"
      },
      { id: 4, usr: false, mess: "What?", avatar: "./img/usr_avatar.jpg" },
      {
        id: 7,
        usr: false,
        mess: "What are you doing?",
        avatar: "./img/usr_avatar.jpg"
      },
      {
        id: 3,
        usr: true,
        mess: "Who are you?",
        avatar: "./img/usersAvatars/unknwnUsr.png"
      },
      {
        id: 5,
        usr: false,
        mess: "Where are you from?",
        avatar: "./img/usr_avatar.jpg"
      },
      {
        id: 6,
        usr: true,
        mess: "NorthWest",
        avatar: "./img/usersAvatars/unknwnUsr.png"
      }
    ]
  }
};

export default state;
