import * as MQTT from 'mqtt';
declare var device: any;
declare var ga: any;
declare var gapi: any;

export interface ReactDocument extends Document {
  addEventListener: (e: string, f: (this: any, ev: MouseEvent) => any, useCapture?: boolean) => void;
  dispatchEvent: (e: Event) => boolean;
}

export interface ReactWindow extends Window {
  Promise?: any;
}
declare var window: ReactWindow;

const refs = {
  device: (typeof device !== 'undefined') ? device : {platform: null},
  document,
  localStorage: null as (Storage|null),
  window,
  mqtt
};

export function setWindow(w: ReactWindow) {
  refs.window = w;
}

export function setDocument(d: ReactDocument) {
  refs.document = d;
}

export function getWindow(): ReactWindow {
  return refs.window;
}

export function getDocument(): Document {
  return refs.document;
}

export function setMQTT(mqtt: MQTT.Client) {
  refs.mqtt = mqtt;
}

export function getMQTT(): MQTT.Client {
  return refs.mqtt;
}