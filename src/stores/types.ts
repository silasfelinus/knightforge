interface User {
  email: string;
  id: number;
}

interface ScreenCard {
  id: number;
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ComponentVisibility {
  [key: string]: boolean;
}

const imagePaths = [
  '../assets/splash/splash00.png',
  '../assets/splash/splash01.png',
  '../assets/splash/splash05.png',
  '../assets/splash/splash04.png',
];
