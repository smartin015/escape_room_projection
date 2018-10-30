export type ViewType = 'NONE' | 'RIDDLE' | 'RINGS';

export interface ViewState {
  view: ViewType;
}

export type SFXType = 'TOMB_OPEN_SPEECH';

export interface AudioState {
  context: AudioContext|null;
  buffers: {[name: string]: any};
}

export interface AppState {
  view: ViewState;
  audio: AudioState;
}
