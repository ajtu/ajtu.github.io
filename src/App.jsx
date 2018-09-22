import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import BabyLessons from './components/BabyLessons';
import GroupLessons from './components/GroupLessons';
import PrivateLessons from './components/PrivateLessons';
import Lottery from './components/Lottery';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Navbar from './components/CustomNavbar';

class App extends Component {




constructor() {
   super();


   this.state = {
     name: '',
     username: ''
   }
 }
  render() {


    return (
    <Router history={Router.hashHistory}>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/baby-lessons" component={BabyLessons} />
          <Route path="/private-lessons" component={PrivateLessons} />
          <Route path="/group-lessons" component={GroupLessons} />
          <Route path="/trial-lesson" component={Lottery} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path='/facebook' component={() => window.location.replace('https://www.facebook.com/Open-Swim-1493519887426611/')}/>
          <Route path='/instagram' component={() => window.location.replace('https://www.instagram.com/openswimschool/')}/>
          <Route path='/twitter' component={() => window.location.replace('https://twitter.com/OpenSwimSchool')}/>

        </div>
      </Router>
    );
  }
}

export default App;
