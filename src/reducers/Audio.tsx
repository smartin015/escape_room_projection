import {
  AudioBufferLoadedAction,
  SetAudioContextAction,
} from '../actions/ActionTypes';
import {AudioState} from './StateTypes';

export const defaultAudio: AudioState = {
  context: null,
  buffers: {},
};

declare type AudioActions = SetAudioContextAction|AudioBufferLoadedAction;

export function audio(state: AudioState = defaultAudio, action: AudioActions): AudioState {
  switch (action.type) {
    case 'SET_AUDIO_CONTEXT':
      return {...state, context: action.context};
    case 'AUDIO_BUFFER_LOADED':
      return {...state, buffers: {...state.buffers, [action.name]: action.buffer}};
    default:
      return state;
  }
}
