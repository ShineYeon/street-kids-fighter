import React, { Component } from "react";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";
import './Main.css'
import { Redirect } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age:"",
      nickname: "",
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
    axios
      .put("http://localhost:8000/signup/profile/", {
        age: this.state.age,
        nickname: this.state.nickname,
      })
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      });
  }
  render() {
    const isLogin = this.props.isLogin;
    if (isLogin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <section className="hero is-warning is-large">
        <div className="hero-body register_1">
          <div className="container">
            <div className="columns is-centered">
              <div className="border1 column is-6-tablet is-5-desktop is-4-widescreen">
                <form onSubmit={this.handleSubmit} className="box">
                  <div className="field">
                    <label className="label">닉네임</label>
                    <div className="control border has-icons-left">
                      <input
                        type="text"
                        placeholder="닉네임을 입력하세요."
                        className="input"
                        name="nickname"
                        value={this.state.nickname}
                        onChange={this.handleChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">나이</label>
                    <div className="control border has-icons-left">
                      <input
                        type="number"
                        placeholder="나이를 입력하세요."
                        className="input"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        required
                      />
                      <span className="icon is-small is-left">
                      <img alt="" src="../number1.png" />
                      </span>
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <div className="field">
                    <button
                      className="button is-fullwidth div2"
                      type="submit"
                    >
                      프로필 수정
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
