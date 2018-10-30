import * as mqtt from 'mqtt';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import * as Redux from 'redux';
import {handleMQTTMessage} from './actions/MQTT';
import MainContainer from './components/MainContainer';
import {SFXType} from './reducers/StateTypes';
import {store} from './Store';

// This is necessary to prevent compiler errors until/unless we fix the rest of
// the repo to reference custom-defined action types (similar to how redux-thunk does things)
// TODO: Fix redux types
/* tslint:disable */
export type ThunkAction<R, S = {}, E = {}, A extends Redux.Action<any> = Redux.AnyAction> = (
  dispatch: Redux.Dispatch<A>,
  getState: () => S,
  extraArgument: E
) => R;
declare module 'redux' {
  export interface Dispatch<A extends Redux.Action<any> = Redux.AnyAction> {
    <R, E>(asyncAction: ThunkAction<R, {}, E, A>): R;
  }
}
/* tslint:enable */

const client = mqtt.connect('mqtt://192.168.1.3:9001');

client.on('connect', () => {
  console.log('connected');
  client.subscribe('/action/ESCP-PRJ-00/#', (err) => {
    if (err) {
      alert(err);
    }
  });
});

client.on('message', (topic, message) => {
  store.dispatch(handleMQTTMessage(topic, message));
});

window.addEventListener('load', init, false);
function init() {
  try {
    // Fix up for prefixing
    (window as any).AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
    const context = new AudioContext();
    store.dispatch({type: 'SET_AUDIO_CONTEXT', context});

    function loadSound(name: SFXType, url: string) {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'arraybuffer';

      // Decode asynchronously
      request.onload = () => {
        context.decodeAudioData(request.response, (buffer) => {
          store.dispatch({type: 'AUDIO_BUFFER_LOADED', buffer, name});
        }, alert);
      };
      request.send();
    }
    loadSound('TOMB_OPEN_SPEECH', '/assets/audio/boom.mp3');
  } catch (e) {
    alert('Web Audio API is not supported in this browser');
  }
}
init();

render(
  <Provider store={store}>
    <MainContainer></MainContainer>
  </Provider>,
  document.getElementById('react-app')
);
