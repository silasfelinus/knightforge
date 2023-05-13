export interface MousePosition {
  x: number;
  y: number;
}

export interface Zone extends MousePosition {
  z: number;
}

export interface Butterfly {
  x: number;
  y: number;
  z: number;
  color: string;
  target?: MousePosition;
}

import { Ref } from 'vue';

// Here's the new interface for the ButterflyGroup component
export interface ButterflyGroup {
  flyTo: (position: MousePosition | Zone) => void;
}

// Define a type that includes the Ref interface from Vue
// and the ButterflyGroup interface
export type ButterflyGroupRef = Ref<ButterflyGroup | null>;
