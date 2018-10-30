import {audio} from './audio';
import {AppState} from './StateTypes';
import {view} from './View';

export default function combinedReduce(state: AppState, action: any): AppState {
  state = state || ({} as AppState);
  return {
    view: view(state.view, action),
    audio: audio(state.audio, action),
  };
}
