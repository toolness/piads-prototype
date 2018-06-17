import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import * as piads from './piads';
import Question from './Question';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PIADS</h1>
        </header>
        <ol className="App-intro">
          {piads.questions.map(question => (
            <Question key={question.number} {...question} />
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
