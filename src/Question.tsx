import * as React from 'react';
import * as piads from './piads';

export interface IQuestionProps {
  question: piads.IQuestion;
  answer?: number;
  onChange: (answer: number) => void;
}

export default class Question extends React.Component<IQuestionProps, {}> {
  public render() {
    const q = this.props.question;
    const name = `q${q.number}`;

    return (
      <li>
        <fieldset>
          <legend>{q.text}</legend>
          <div>
            <span className="scale-description">Decreases</span>
            {piads.answers.map(answer => {
              const id = `${name}_a${answer}`;
              const handleClick = () => this.props.onChange(answer);
              let isChecked = false;

              if (this.props.answer !== undefined) {
                isChecked = this.props.answer === answer;
              }

              return (
                <React.Fragment key={answer}>
                  <input type="radio" id={id} name={name} onClick={handleClick} checked={isChecked} />
                  <label htmlFor={id}>{answer} </label>
                </React.Fragment>
              );
            })}
            <span className="scale-description">Increases</span>
            <aside>{q.glossaryText}</aside>
          </div>
        </fieldset>
      </li>
    );
  }
}
