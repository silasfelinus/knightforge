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
