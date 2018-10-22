import Redux from 'redux';
import {ViewType} from '../reducers/StateTypes';

export interface SetViewAction extends Redux.Action {
  type: 'SET_VIEW';
  view: ViewType;
}