import * as Redux from 'redux';
import {setView} from './View';

export function handleMQTTMessage(topic: string, message: Buffer) {
  return (dispatch: Redux.Dispatch<any>): any => {
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
    } else {
      console.log('Unknown MQTT message: ', topic, message.toString());
    }

  };
}
