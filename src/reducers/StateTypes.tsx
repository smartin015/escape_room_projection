export type ViewType = 'NONE' | 'RIDDLE' | 'RINGS' | 'TESTING';

export interface ViewState {
  view: ViewType;
}

export type SFXType = 'TOMB_OPEN_SPEECH'
	|'BOOM'
	|'PING_SHORT'
	|'PING_LONG'
	|'TWINKLE_HIGH'
	|'TWINKLE_MED'
	|'TWINKLE_LOW';

export interface AudioState {
  context: AudioContext|null;
  buffers: {[name: string]: any};
}

export interface AppState {
  view: ViewState;
  audio: AudioState;
}
