import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/nav';
import ProfileContainer from './components/content/profile-container';
import Footer from './components/footer/footer';
import DialogueContainer from './components/dialogues/dialogues-container';
import News from './components/news/news';
import Notes from './components/notes/notes';
import UsersContainer from './components/users/users-container';
import HeaderContainer from './components/header/header-container';
import Login from './components/login/login';

const App = () => {

  return (

    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/content/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogues" render={() => <DialogueContainer />} />
        <Route path="/news" component={News} />
        <Route path="/notes" component={Notes} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
      <Footer />
    </div>


  );
}

export default App;
