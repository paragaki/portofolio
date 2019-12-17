import React from 'react';
import logo from './logo.svg';
import csharpLogo from './csharp.png';
import gitLogo from './git.png';
import githubLogo from './github.png';
import javascriptLogo from './javascript.png';
import nodeLogo from './node.png';
import reactLogo from './react.png';
import sqlLogo from './sql.png';
import twitterLogo from './twitter.png';
import vueLogo from './vue.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <p>西田 健司</p>
        <p>Kenji Nishida</p>
      </div>
      <hr />
      <div>
        <p>Email</p>
        <button className=".page-link.text-dark.d-inline-block">
          strangejourney28@gmail.com
        </button>
      </div>
      <div>
        <p>Works</p>
        <button className=".page-link.text-dark.d-inline-block">
          Vue Pomodoro
        </button>
      </div>
      <div>
        <p>Using Languages and Frameworks</p>
        <img src={javascriptLogo}></img>
        <img src={nodeLogo}></img>
        <img src={reactLogo}></img>
        <img src={vueLogo}></img>
        <img src={csharpLogo}></img>
        <img src={sqlLogo}></img>
        <img src={gitLogo}></img>
      </div>
      <div>
        <p>Contact Me</p>
        <img src={githubLogo}></img>
        <img src={twitterLogo}></img>
      </div>      
    </div>
  );
}

export default App;
