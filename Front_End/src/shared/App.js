import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  Main,
  Like,
  My,
  Login,
  Detail,
  Register,
  Music,
  Music2,
  Music3,
  Dance,
  Dance2,
  FAQ,
  Record,
  New,
  Profile,
  Video
} from "../pages/index";
import { Header, Footer, Menu } from "../components/index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
    const token = localStorage.getItem("token");
    this.state = {
      // eslint-disable-next-line
      isLogin: token != "null",
    };
    console.log("[App.js] token: ", token);
    console.log("[App.js] isLogin: ", this.state.isLogin);
    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
  doLogin() {
    console.log("[App.js] doLogin");
    this.setState({ isLogin: true }, () => {
      console.log("[App.js] isLogin after doLogin: ", this.state.isLogin);
    });
  }
  doLogout() {
    console.log("[App.js] doLogout");
    this.setState({ isLogin: false }, () => {
      console.log("[App.js] isLogin after doLogout: ", this.state.isLogin);
    });
  }
  render() {
    return (
      <div>
        <Header doLogout={this.doLogout} isLogin={this.state.isLogin} />
        <img className='banner1Icon' alt="" src="../banner-1@2x.png" />
      <img
        className='skfLogo21Icon'
        alt=""
        src="../skf-logo2-1@2x.png"
      />


        {/* <div className="centered">
          <Route exact path="/" component={Menu} />
          <Route path="/like" component={Menu} />
          <Route path="/my" component={Menu} />
        </div>
        <div className="ncentered">
          <Route exact path="/" component={Main} />
          <Route path="/like" component={Like} />
          <Route path="/my" component={My} />
        </div> */}
        <div >
          {/* <Route path="/detail/:pk/" render={(post) => <Detail post={post} />} /> */}
          {/* <Route
            path="/new/"
            render={() => <New isLogin={this.state.isLogin} />}
          /> */}
          {/* <Route
            path="/profile/"
            render={() => <Profile isLogin={this.state.isLogin} />}
          /> */}
        </div>
        <div>
          <Route
            path="/login/"
            render={() => (
              <Login doLogin={this.doLogin} isLogin={this.state.isLogin} />
            )}
          />
          <Route path="/register/" component={Register} />
             <Route
            path="/profile/"
            render={() => <Profile isLogin={this.state.isLogin} />}
          />
        </div>
        <div>
        <Route path="/music/" render={() => <Music isLogin={this.state.isLogin} />} />
        <Route path="/music2/" render={() => <Music2 isLogin={this.state.isLogin} />} />
        <Route path="/music3/" render={() => <Music3 isLogin={this.state.isLogin} />} />
             <Route
            path="/dance/"
            render={() => <Dance isLogin={this.state.isLogin} />}/>
          <Route
            path="/dance2/"
            render={() => <Dance2 isLogin={this.state.isLogin} />}
          />
          <Route
            path="/faq/"
            render={() => <FAQ isLogin={this.state.isLogin} />}
          />
             <Route
            path="/record/"
            render={() => <Record isLogin={this.state.isLogin} />}
          />
            <Route
            path="/video/"
            render={() => <Video isLogin={this.state.isLogin} />}
          />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
