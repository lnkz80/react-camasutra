const pathToAvatars = './img/usersAvatars/';
let state = {
  usrs: [
    { id: 0, name: 'Alex', fullname: 'Alessandro Linkuzzo', avatar: pathToAvatars + 'alex.png' },
    { id: 1, name: 'Steve', fullname: 'Steve Jobs', avatar: pathToAvatars + 'steve.png' },
    { id: 2, name: 'John', fullname: 'John Travolta', avatar: pathToAvatars + 'john.png' },
    { id: 3, name: 'Bruce', fullname: 'Bruce Lee', avatar: pathToAvatars + 'bruce.png' },
    { id: 4, name: 'Stella', fullname: 'Stella Artois', avatar: pathToAvatars + 'stella.png' },
    { id: 5, name: 'Samantha', fullname: 'Samantha Fox', avatar: pathToAvatars + 'samantha.png' },
    { id: 6, name: 'Sarah', fullname: 'Sarah Connor', avatar: pathToAvatars + 'sarah.png' },
    { id: 7, name: 'Rick', fullname: 'Rick Grimes', avatar: pathToAvatars + 'rick.png' }
  ],
  profilePage: {
    postsData: [
      { id: 1, message: 'Hi, how are you?', user: 'Steve' },
      { id: 2, message: "Hello, I'm fine", user: 'Alex' },
      { id: 3, message: 'What are you doing?', user: 'Sarah' },
      { id: 4, message: 'So what???', user: 'Alex' }
    ]
  },
  dialogsPage: {
    dialogsData: [
      { id: 0, name: 'Alex', act: true },
      { id: 1, name: 'Steve', act: false },
      { id: 2, name: 'John', act: false },
      { id: 3, name: 'Bruce', act: false },
      { id: 4, name: 'Stella', act: false },
      { id: 5, name: 'Samanta', act: false },
      { id: 6, name: 'Sarah', act: false },
      { id: 7, name: 'Rick', act: false }
    ],
    // usr:false - me; usr:true - another user
    // , avatar: "./img/usr_avatar.jpg"
    //, avatar: "./img/usersAvatars/unknwnUsr.png"
    messagesData: [
      { id: 1, usr: false, mess: 'Hello', avatar: pathToAvatars + 'alex.png' },
      {
        id: 2,
        usr: true,
        mess: 'Hi',
        avatar: pathToAvatars + 'sarah.png'
      },
      { id: 4, usr: false, mess: 'What are you doing?', avatar: pathToAvatars + 'alex.png' },
      {
        id: 7,
        usr: false,
        mess: 'Hey!',
        avatar: pathToAvatars + 'alex.png'
      },
      {
        id: 3,
        usr: true,
        mess: 'Nothing? Why are you asking?',
        avatar: pathToAvatars + 'sarah.png'
      },
      {
        id: 5,
        usr: false,
        mess: 'Where are you from?',
        avatar: pathToAvatars + 'alex.png'
      },
      {
        id: 6,
        usr: true,
        mess: 'NorthWest',
        avatar: pathToAvatars + 'sarah.png'
      }
    ]
  }
};

export default state;
