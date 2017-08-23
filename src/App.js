import React from 'react'
import NavBar from './NavBar'
import Projects from './Projects'
import './App.css'
import $ from "jquery";
import TypingTitle from "./TypingTitle"


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick(event) {
    $('html,body').animate({scrollTop: $("#portfolio").offset().top},1000);
  }

  render() {
    return (
      <div>
        <div className="outerContainer">
          <div>
            <div className="innerContainer">
              <h1 className="title">Danny Li</h1>
              <TypingTitle
                strings={[
                  'Problem Solver',
                  'Builds Web App',
                  'Web developer'
                ]}
              />
              <h2 className="main">I am a Master of IT Graduate who is passionate about web and IOS software development. <br/><br/> I have recently completed a full time web development immersive course at General Assembly to help build on my Web Development skills and get some exposure to the industry. <br/><br/> I am interested in making apps and I want to turn my interest into my career.
              </h2>

            </div>
            <span className="iconContainer">
              <a href="https://www.linkedin.com/in/danny-li-0109/" style={{color: "#4875B4"}}><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <a href="https://github.com/dannyli0109" style={{color: "#2f2f2f"}}><i className="fa fa-github-square" aria-hidden="true"></i></a>
              <a href="mailto: dannyli0109@gmail.com" style={{color: "#2f2f2f"}}><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            </span>
            <div className="flex">
                <a className="portfolio-link" href="#portfolio" onClick={this.handleLinkClick}><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
            </div>
          </div>




        </div>

        <div className = "outerContainer" id="portfolio">
          <h1>Projects</h1>
          <Projects></Projects>
        </div>

      </div>
    )
  }
}
