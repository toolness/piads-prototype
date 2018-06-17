import * as React from 'react';
import * as piads from './piads';

export default class Question extends React.Component<piads.IQuestion, {}> {
  public render() {
    const name = `q${this.props.number}`;

    return (
      <li>
        <fieldset>
          <legend>{this.props.text}</legend>
          <div>
            <span className="scale-description">Decreases</span>
            {piads.answers.map(answer => {
              const id = `${name}_a${answer}`;
              return (
                <React.Fragment key={answer}>
                  <input type="radio" id={id} name={name} />
                  <label htmlFor={id}>{answer} </label>
                </React.Fragment>
              );
            })}
            <span className="scale-description">Increases</span>
          </div>
        </fieldset>
      </li>
    );
  }
}
