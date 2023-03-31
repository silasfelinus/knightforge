export enum Preset {
  TextInput = 'TextInput',
  SplashScreen = 'SplashScreen',
  ChatWidget = 'ChatWidget',
  SplashWidget = 'SplashWidget',
  Lab = 'Lab',
  ChatGPT = 'ChatGPT',
  Paint = 'Paint',
  Playspace = 'Playspace',
  Settings = 'Settings',
  Default = 'Default',
  // Add more presets here
}

export type Side = 'left' | 'main' | 'right';

export interface WidgetSettings {
  title: string;
  bgColor: string;
}

export interface Screen {
  preset: Preset;
  visible: boolean;
}

export interface State {
  leftScreen: Screen;
  mainScreen: Screen;
  rightScreen: Screen;
  widgetSettings: Record<Preset, WidgetSettings>;
}
