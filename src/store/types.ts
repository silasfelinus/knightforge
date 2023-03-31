export const presetOptions = [
  'TextInput',
  'SplashScreen',
  'ChatWidget',
  'SplashWidget',
  'Lab',
  'ChatGPT',
  'Paint',
  'Playspace',
  'Settings',
  'Default',
  /* Add more presets here */
] as const;

export type Preset = (typeof presetOptions)[number];

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
