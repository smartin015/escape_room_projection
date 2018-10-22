import {
  SetViewAction,
} from '../actions/ActionTypes';
import {ViewState} from './StateTypes';

export const defaultView: ViewState = {
  view: 'RINGS',
};

declare type ViewActions = SetViewAction;

export function view(state: ViewState = defaultView, action: ViewActions): ViewState {
  switch (action.type) {
    case 'SET_VIEW':
      return {...state, view: action.view};
    default:
      return state;
  }
}
