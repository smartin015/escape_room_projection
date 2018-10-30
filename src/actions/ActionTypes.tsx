import Redux from 'redux';
import {ViewType} from '../reducers/StateTypes';

export interface SetViewAction extends Redux.Action {
  type: 'SET_VIEW';
  view: ViewType;
}

export interface SetAudioContextAction extends Redux.Action {
  type: 'SET_AUDIO_CONTEXT';
  context: AudioContext;
}

export interface AudioBufferLoadedAction extends Redux.Action {
  type: 'AUDIO_BUFFER_LOADED';
  name: string;
  buffer: any;
}