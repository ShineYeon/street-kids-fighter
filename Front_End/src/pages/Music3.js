import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";
import './Main.css'



class Music3 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        name: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      const target = event.target;
      this.setState({
        [target.name]: target.value,
      });
    }
    handleSubmit(event) {
      event.preventDefault();
      console.log("[Music.js] Call");
      axios
        .get("http://localhost:8000/music2/", {
          file: this.state.file,
          name: this.state.name,
        })
        .then((response) => {
          console.log(response.data);
          this.props.history.push("/music2/");
        });
    }
    
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
              </div>
            </div>
         
                 
                    <div className='rectangleDiv11' />
                    <b className='b1'>
          <p className='pi'>{`안무가 생성되었습니다. `}</p>
          <p
            className='pi'
         >{`안무 조회페이지에서 생성된 안무를 확인해주세요`}</p>
       </b>
       <a className="rectangleDiv12 div2" href='/dance/'>
                            안무 조회
                      </a>
                      
                   
                          
                       
                          
      
        </section>
      );
    }
  }
  export default Music3