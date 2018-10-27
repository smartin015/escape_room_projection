import * as React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {ViewType} from '../reducers/StateTypes';
import Riddle from './Riddle';
import Rings from './Rings';

export interface StateProps {
  view: ViewType;
}

export interface DispatchProps {
}

interface Props extends StateProps, DispatchProps {}

const CARD_TRANSITION_ANIMATION_MS = 5000;

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
        <TransitionGroup
            childFactory={(child) => React.cloneElement(
                child, {classNames: 'fade'}
            )}>
            <CSSTransition
              key={props.view}
              classNames={''}
              timeout={{enter: CARD_TRANSITION_ANIMATION_MS, exit: CARD_TRANSITION_ANIMATION_MS}}>
              <div className={'contents'}>
                {view}
              </div>
            </CSSTransition>
          </TransitionGroup>
      </div>
    </div>
  );
};

export default Main;
