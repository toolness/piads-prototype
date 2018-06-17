import * as React from 'react';
import * as piads from './piads';

export default class Question extends React.Component<piads.IQuestion, {}> {
  public render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}
