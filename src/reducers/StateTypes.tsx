export type ViewType = 'NONE' | 'RIDDLE' | 'RINGS';

export interface ViewState {
  view: ViewType;
}

export interface AppState {
  view: ViewState;
}
