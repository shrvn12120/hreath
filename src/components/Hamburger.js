import React, { Component } from "react";
import "./Hamburger.css";

class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //isClosed: 'is-closed',
      isClosed: true,
      trigger: 'hamburglar',

    };
    this.eventHandler = this.eventHandler.bind(this)
  }
   eventHandler(){
         this.setState(prevState =>({
          isClosed:
          !prevState.isClosed
         }))
     }
  
  //  trigger = () => {
  //   this.setState({
      
      
  //   });
  //   if (isClosed == true) {
  //     trigger.removeClass('is-open');
  //     trigger.addClass('is-closed');
  //     isClosed = false;
  //   } else {
  //     trigger.removeClass('is-closed');
  //     trigger.addClass('is-open');
  //     isClosed = true;
  //   }
  //   console.log("ok")
    
  // };
  
  


  render() {
    return (
      <div>
        <div
          onClick={this.eventHandler}
          className={`hamburglar ${this.state.isClosed ? 'is-closed' : 'is-open'}`}
        >
          <div className="burger-icon">
            <div className="burger-container">
              <span className="burger-bun-top"></span>
              <span className="burger-filling"></span>
              <span className="burger-bun-bot"></span>
            </div>
          </div>

          {/* svg ring containter  */}
          <div className="burger-ring">
            <svg className="svg-ring">
              <path
                className="path"
                fill="none"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
              />
            </svg>
          </div>
          {/*  the masked path that animates the fill to the ring  */}

          <svg width="0" height="0">
            <mask id="mask">
              <path
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#ff0000"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
              />
            </mask>
          </svg>
          <div className="path-burger">
            <div className="animate-path">
              <div className="path-rotation"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hamburger;
