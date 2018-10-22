import * as React from 'react';

export default class RippleText extends React.Component {
  public render() {
    return (
      <svg className="rippleText">
        <text width="500">{this.props.children}</text>
      </svg>
    );
  }
}
