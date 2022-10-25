import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav.js';
import Home from './components/HomePage/Home.js';
import PostDetails from './components/PostDetails/PostDetails.js';
import GoToTop from './GoToTop.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import CreatePostSuccess from './components/CreatePost/CreatePostSuccess/CreatePostSuccess.js';
import Profile from './components/Profile/Profile.js';
import Footer from './components/Footer/Footer.js';
import PageNotFound from './components/PageNotFound/PageNotFound.js';
import CategoryPage from './components/CategoryPage/CategoryPage.js';
import SearchResult from './components/SearchResult/SearchResult.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyComponent from 'react-fullpage-custom-loader'
import Loader from './components/HomePage/Loader.js'



const App = () => {
  AOS.init({
    duration: 1000
  });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {


    setTimeout(() => {
      setShowLoader(false);
    }, 2000);


  }, []);





  return (


    <BrowserRouter forceRefresh={true}>

      <Nav />
      <GoToTop />

      {showLoader ?
        (<MyComponent wrapperBackgroundColor="rgb(87, 8, 97)" customLoader={<Loader />} />
        ) : (
          <>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path="/blogpost/:_id" component={PostDetails}></Route>
              {user?.result.email === "mohamed.hagi9@gmail.com" &&
                <Route exact path='/createpost' component={CreatePost}></Route>
              }
              <Route exact path="/login" component={LoginPage}></Route>
              <Route exact path="/addblog/success" component={CreatePostSuccess}></Route>
              <Route exact path="/profile/:_id" component={Profile}></Route>
              <Route exact path="/category/:category" component={CategoryPage}></Route>
              <Route path="/searchResults/:searchQuery" exact component={SearchResult} />
              <Route path='*' exact={true} component={PageNotFound} />




            </Switch>
            <Footer />
          </>

        )
      }


    </BrowserRouter>

  );
};

export default App;
