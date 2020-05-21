const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      header: "Test",
      message: this._state.profilePage.newPostText,
      postimg: "./img/postimg/test.jpg",
      date: "19-03-2020",
    };
    state.postsData.push(newPost);
    state.newPostText = "";
  }
  // UPDATE-POST-TEXT
  else if (action.type === UPDATE_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;
};
