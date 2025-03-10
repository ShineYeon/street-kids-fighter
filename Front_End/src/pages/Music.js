import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";
import './Main.css'

class Music extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   file: '',
    //   name: '',
    // };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  //   const target = event.target;
  //   this.setState({
  //     [target.name]: target.value,
  //   });
  // }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("[Music.js] Call");
  //   axios
  //     .post("http://localhost:8000/music/", {
  //       file: this.state.file,
  //       name: this.state.name,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       this.props.history.push("/music2/");
  //     });
  // }
  
  render() {
    const isLogin = this.props.isLogin;
    if (isLogin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <section className="div-white">
        <div className="hero-body">
          <div className="container">
              <div className="title1 centered">
                  음악 올리기
                </div>
                
              <div className='content1 centered'>
                <br/>
                <br/><br/>
                mp3 파일 대신 wav 파일을 올려주세요.
              </div>
            </div>
          </div>

          <div onSubmit={this.handleSubmit}>

          <label className="rectangleDiv1" for="input-file">
          </label>
                  <input
                        type="file"
                        id='input-file'
                        className="input1"
                        accept='.wav'
                        name="username"
                        style={{display:"none"}}
                        // value={this.state.username}
                        // onChange={this.handleChange}
                        required
                      />
                   
                    <img className='vectorIcon' alt="" src="../vector-10.svg" />
                    
                 
                  
                      <input
                        type="text"
                        placeholder="음악제목을 입력하세요."
                        className="rectangleDiv2 input1"
                        name="username"
                        // value={this.state.username}
                        // onChange={this.handleChange}
                        required
                      />
                     
                      <a className="rectangleDiv3 div2" href='/music2/'>
                            확인
                      </a>
                       
                    </div>
      </section>
    );
  }
}

export default Music;
