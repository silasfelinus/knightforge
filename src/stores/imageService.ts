// src/stores/imageService.ts

import { Gallery, Photoset, Image } from './types';

const galleries = import.meta.globEager('@/assets/images/*/');

function getRandomArrayItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function listGalleries(): Promise<Gallery[]> {
  // Read and parse the gallery information
  return Object.keys(galleries).map((name) => {
    const galleryInfo = galleries[name].default;
    return {
      name: galleryInfo.name,
      user: galleryInfo.user,
      size: galleryInfo.size,
    };
  });
}

export async function listPhotosets(gallery: string): Promise<Photoset[]> {
  const photosets = import.meta.globEager(`@/assets/images/${gallery}/*`);
  return Object.keys(photosets).map((name) => {
    const photosetInfo = photosets[name].default;
    return {
      galleryName: gallery,
      name: photosetInfo.name,
      user: photosetInfo.user,
      filePath: name,
    };
  });
}

export async function getRandomImageFromPhotoset(
  gallery: string,
  photoset: string
): Promise<Image> {
  const photos = import.meta.globEager(
    `@/assets/images/${gallery}/${photoset}-*.webp`
  );
  const filePath = getRandomArrayItem(Object.keys(photos));
  return {
    galleryName: gallery,
    photosetName: photoset,
    fileName: filePath.split('/').pop() || '',
    filePath,
  };
}

export async function getRandomImageFromGallery(
  gallery: string
): Promise<Image> {
  const photos = import.meta.globEager(`@/assets/images/${gallery}/*.webp`);
  const filePath = getRandomArrayItem(Object.keys(photos));
  const photosetName = filePath.match(/\/(\w+)-/)?.[1] || '';
  return {
    galleryName: gallery,
    photosetName,
    fileName: filePath.split('/').pop() || '',
    filePath,
  };
}

export async function getRandomImage(): Promise<Image> {
  const galleryKeys = Object.keys(galleries);
  const randomGallery = getRandomArrayItem(galleryKeys);
  return getRandomImageFromGallery(randomGallery);
}
