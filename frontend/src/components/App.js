import React, {Component} from "react"
import Nav from "react-bootstrap/Nav"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import Projects from "./components/projects"
import Project1 from "./components/projects/project1"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './components/home.css'

class App extends Component {
  render() {
    return (
      <div>

        <nav>
          <Nav className="mr-auto">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="https://drive.google.com/file/d/1Yv3Sv1Lipg6Z9bGs07EiqibiMwmpngTg/view?usp=sharing" target="_blank_">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </Nav>
        </nav>

        <Router>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
            <Route path="/contact" component={Contact}>
            </Route>
            <Route path="/projects" component={Projects}>
            </Route>
            <Route path="/project-dir/project-1" component={Project1}></Route>
          </Switch>
        </Router>
        <div>
          <footer>
            <Nav className="justify-content-center">
              <a class='lower-nav-text' href="/">Home</a>
              <a class='lower-nav-text' href="/about">About</a>
              <a class='lower-nav-text' href="https://drive.google.com/file/d/1Yv3Sv1Lipg6Z9bGs07EiqibiMwmpngTg/view?usp=sharing" target="_blank_">Resume</a>
              <a class='lower-nav-text' href="/projects">Projects</a>
              <a class='lower-nav-text' href="/contact">Contact</a>
            </Nav>
            <p class='footer-text'>Copyright 2020</p>
          </footer>
        </div>
      </div>
    );
  };

}
export default App;
