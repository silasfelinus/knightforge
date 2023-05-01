declare module 'png-metadata' {
  export function readMetadata(data: Uint8Array): Record<string, string>;
}
