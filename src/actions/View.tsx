import {ViewType} from '../reducers/StateTypes';
import {SetViewAction} from './ActionTypes';

export function setView(view: ViewType): SetViewAction {
  return {type: 'SET_VIEW', view};
}
