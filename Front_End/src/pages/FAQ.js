import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";
import './Main.css'

class FAQ extends Component {
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
                      
                
        
            </div>
          </div>

          
      </section>
    );
  }
}

export default FAQ;
