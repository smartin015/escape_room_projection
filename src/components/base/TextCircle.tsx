import * as React from 'react';

export interface Props {
  english: string;
  gaelic: string;
}

export default class TextCircle extends React.Component<Props, {}> {
  public render() {
    return (
      <svg className="textCircle" viewBox="0 0 100 100">
        <path id="c" d="M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0"/>
        <text className="english">
          <textPath xlinkHref="#c">
            {this.props.english}
          </textPath>
        </text>
        <text className="gaelic">
          <textPath xlinkHref="#c">
            {this.props.gaelic}
          </textPath>
        </text>
      </svg>
    );
  }
}
