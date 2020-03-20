import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav state={props.state.usrs} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              usrs={props.state.usrs}
              addPost={props.addPost}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
