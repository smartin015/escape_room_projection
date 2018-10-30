import * as Redux from 'redux';
import {AppState} from '../reducers/StateTypes';
import {playBuffer} from './Audio';
import {setView} from './View';

export function handleMQTTMessage(topic: string, message: Buffer) {
  return (dispatch: Redux.Dispatch<any>, getState: () => AppState): any => {
    if (topic.endsWith('setView')) {
      switch (message.toString()) {
        case 'NONE':
          return dispatch(setView('NONE'));
        case 'RIDDLE':
          return dispatch(setView('RIDDLE'));
        case 'RINGS':
          return dispatch(setView('RINGS'));
        default:
          alert('Unknown view ' + message.toString());
      }
    } else if (topic.endsWith('playSound')) {
      const {context, buffers} = getState().audio;
      if (context === null) {
        return alert('Audio context not loaded!');
      }
      const buffer = (buffers as any)[message.toString()];
      if (!buffer) {
        return alert('Buffer not found for' + message.toString());
      }
      return playBuffer(buffer, context);
    } else {
      console.log('Unknown MQTT message: ', topic, message.toString());
    }

  };
}
