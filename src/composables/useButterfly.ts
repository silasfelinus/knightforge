import { reactive, ref } from 'vue';

// Define constants for the maximum and minimum sizes
const MAX_SIZE = 1;
const MIN_SIZE = 0.5;

export interface Butterfly {
  x: number;
  y: number;
  z: number;
  color: string;
}

export function useButterfly(
  initialX = 0,
  initialY = 0,
  initialZ = 1,
  initialColor = ''
) {
  const position = reactive({ x: initialX, y: initialY });
  const size = ref(initialZ);
  const color = ref(initialColor);

  const updatePosition = (dx: number, dy: number) => {
    position.x += dx;
    position.y += dy;

    // Update the size based on the new position
    size.value = calculateSize(position.x, position.y);
  };

  const moveTo = (x: number, y: number) => {
    position.x = x;
    position.y = y;

    // Calculate the size based on the new position
    size.value = calculateSize(x, y);
  };

  // Function to calculate the size based on the x and y position
  const calculateSize = (x: number, y: number): number => {
    // Normalize the x and y values to the range [0, 1]
    const normalizedX = x / window.innerWidth;
    const normalizedY = y / window.innerHeight;

    // Use a combination of the x and y values to calculate the size
    // This can be tweaked to get the desired effect
    const newSize =
      MAX_SIZE - ((normalizedX + normalizedY) / 2) * (MAX_SIZE - MIN_SIZE);

    return newSize;
  };

  return {
    position,
    size,
    color,
    updatePosition,
    moveTo,
  };
}
