import { ref } from 'vue';
import { readMetadata } from 'png-metadata';

export function usePngMetadata() {
  const metadata = ref<Record<string, string>>({});

  async function fetchPngMetadata(pngUrl: string) {
    try {
      const response = await fetch(pngUrl);
      const buffer = await response.arrayBuffer();

      const metadataString = readMetadata(new Uint8Array(buffer));
      metadata.value = metadataString;
    } catch (error) {
      console.error('Error fetching PNG metadata:', error);
    }
  }

  return { metadata, fetchPngMetadata };
}
