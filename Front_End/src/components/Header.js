import React, { Component } from "react";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../pages/Main.css'

class Header extends Component {
  constructor(props) {
    console.log("[Header.js] Constructor");
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    console.log("[Header.js] handleLogout");
    // event.preventDefault();
    localStorage.setItem("token", null);
    localStorage.setItem("username", null);
    console.log("[Header.js] Call doLogout");
    this.props.doLogout();
  }

  render() {
    // console.log("[*] Header Component");
    // console.log("isLogin: ", this.props.isLogin);
    return (
      <div className="navbar">
       
        <div className="navbar-brand">
        {/* <img className='banner1Icon' alt="" src="../banner-1@2x.png" />
        <img
        className='skfLogo21Icon'
        alt=""
        src="../skf-logo2-1@2x.png"
      /> */}
          <a className="navbar-item" href="/">
            <h1 className='div1'>스트리트 키즈 파이터</h1>
          </a>
        </div>
        <div className="navbar-brand1">
      
        <a className="navbar-item" href="/music/">
            <h1>Music</h1>
          </a>
        
        
        <a className="navbar-item" href="/dance/">
            <h1>Dance</h1>
          </a>
       
        <a className="navbar-item" href="/record/">
            <h1>Record</h1>
          </a>


          <a className="navbar-item" href="/video/">
            <h1>Video</h1>
          </a>


          <a className="navbar-item" href="/faq/">
            <h1>FAQ</h1>
          </a>

       
       
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {this.props.isLogin ? (
                <a
                  className="button is-primary"
                  href="/"
                  onClick={this.handleLogout}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </span>
                  <span>
                    <strong>로그아웃</strong>
                  </span>
                </a>
              ) : (
                <a className="button div2" href="/login/">
                  <span className="icon">
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </span>
                  <span>
                    <strong>로그인</strong>
                  </span>
                </a>
              )}
            </div>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-info div2" href="/profile/">
                <span className="icon">
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
                <span>
                  <strong>프로필</strong>
                </span>
              </a>
            </div>
            
          </div>
        </div>
      
      </div>
    );
  }
}

export default Header;
