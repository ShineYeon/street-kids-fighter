import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";
import './Main.css'

class Music2 extends Component {
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
        <meta http-equiv="refresh" content="5; url=http://localhost:3000/music3/"></meta>
        <div className="hero-body">
          <div className="container">
              <div className="title1 centered">
                  음악 올리기
                </div>
            </div>
          </div>
       
               
                  <div className='rectangleDiv11' />
                  <b className='b'>
        <p className='pi'>{`안무를 생성하고 있습니다. `}</p>
        <p
          className='pi'
       >{`음악 길이에 따라 소요 시간이 길어질 수 있습니다. `}</p>
    
     </b>
                    
                 
                        
                     
                        
    
      </section>
    );
  }
}
// return (
//     <div className={styles.div}>
//       <div className={styles.rectangleDiv} />
//       <div className={styles.div1}>스트리트 키즈 파이터</div>
//       <div className={styles.groupDiv}>
//         <img className={styles.rectangleIcon} alt="" src="../rectangle-2.svg" />
//         <div className={styles.div2}>로그아웃</div>
//       </div>
//       <div className={styles.div3}>음악 올리기</div>
//       <div className={styles.rectangleDiv1} />
//       <b className={styles.b}>
//         <p className={styles.p}>{`안무를 생성하고 있습니다. `}</p>
//         <p
//           className={styles.p1}
//         >{`음악 길이에 따라 소요 시간이 길어질 수 있습니다. `}</p>
//       </b>
//       <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
//       <img className={styles.ellipseIcon1} alt="" src="../ellipse-21.svg" />
//       <img className={styles.ellipseIcon2} alt="" src="../ellipse-3.svg" />
//     </div>
//   );
export default Music2;