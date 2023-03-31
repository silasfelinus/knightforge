export type Preset =
  | 'TextInput'
  | 'SplashScreen'
  | 'ChatWidget'
  | 'SplashWidget'
  | 'Lab'
  | 'ChatGPT'
  | 'Paint'
  | 'Playspace'
  | 'Settings'
  | 'Default';

export type Side = 'left' | 'main' | 'right';

export interface WidgetSettings {
  title: string;
  bgColor: string;
}

export interface State {
  leftPreset: Preset;
  mainPreset: Preset;
  rightPreset: Preset;
  leftVisible: boolean;
  mainVisible: boolean;
  rightVisible: boolean;
  widgetSettings: Record<Preset, WidgetSettings>;
}
