import * as React from 'react';
import {ViewType} from '../reducers/StateTypes';
import Riddle from './Riddle';
import Rings from './Rings';

export interface StateProps {
  view: ViewType;
}

export interface DispatchProps {
}

interface Props extends StateProps, DispatchProps {}

const Main = (props: Props): JSX.Element => {
  let view: JSX.Element;
  switch (props.view) {
    case 'NONE':
      view = <span></span>;
      break;
    case 'RIDDLE':
      view = <Riddle/>;
      break;
    case 'RINGS':
      view = <Rings/>;
      break;
    default:
      throw new Error('Unimplemented view ' + props.view);
  }

  return (
    <div className="main">
      <div className="contents">
        {view}
      </div>
    </div>
  );
};

export default Main;
