import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import * as piads from './piads';
import Question from './Question';

class App extends React.Component {
  public render() {
    const deviceName = '<INSERT DEVICE NAME HERE>';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PIADS</h1>
        </header>
        <div>
          <p className="App-intro">
            Each word or phrase below describes how using an assistive device may affect
            {' '}
            a user. Some might seem unusual but it is important that you answer every one
            {' '}
            of the {piads.questions.length} items. So, for each word or phrase, put
            {' '}
            an "X" in the appropriate box to show how you are affected by using the {deviceName}.
          </p>
          <ol className="App-questions">
          {piads.questions.map(question => (
            <Question key={question.number} {...question} />
          ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
