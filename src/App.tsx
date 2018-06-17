import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import * as piads from './piads';
import Question from './Question';

interface IAppState {
  answers: piads.AnswerMap
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      answers: new piads.AnswerMap()
    };
  }

  public render() {
    const deviceName = '<INSERT DEVICE NAME HERE>';
    const totals = this.state.answers.getTotals();
    const fractionDigits = 2;

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
          {piads.questions.map(question => {
            const handleChange = (answer: number) => {
              this._handleChange(question, answer);
            };

            return <Question
              key={question.number}
              question={question}
              answer={this.state.answers.get(question)}
              onChange={handleChange}
            />
          })}
          </ol>
          <h2>Subscale scores</h2>
          <p>Competence: {totals.competence.toFixed(fractionDigits)}</p>
          <p>Adaptability: {totals.adaptability.toFixed(fractionDigits)}</p>
          <p>Self-Esteem: {totals.selfEsteem.toFixed(fractionDigits)}</p>
        </div>
      </div>
    );
  }

  private _handleChange(question: piads.IQuestion, answer: number) {
    const newAnswers = new piads.AnswerMap(this.state.answers);
    newAnswers.set(question, answer);
    this.setState({ answers: newAnswers });
    console.log(`woooot ${question.number} ${answer}`);
  }
}

export default App;
