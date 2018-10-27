import * as React from 'react';

export default class RippleText extends React.Component {
  public render() {
    return (
      <div className="rippleText">
        {this.props.children}
      </div>
    );
  }
}
