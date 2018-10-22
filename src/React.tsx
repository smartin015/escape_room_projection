import * as mqtt from 'mqtt';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import * as Redux from 'redux';
import {handleMQTTMessage} from './actions/MQTT';
import MainContainer from './components/MainContainer';
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

render(
  <Provider store={store}>
    <MainContainer></MainContainer>
  </Provider>,
  document.getElementById('react-app')
);
