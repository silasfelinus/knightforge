import { Image, Photoset, Modeler, Gallery, Tag } from '@/stores/types';

export default function useGalleryManager(
  galleries: Gallery[],
  photosets: Photoset[],
  modelers: Modeler[],
  tags: Tag[]
) {
  const getImageById = (id: number): Image | undefined => {
    for (const gallery of galleries) {
      const image = gallery.images?.find((img) => img.id === id);
      if (image) return image;
    }
  };

  const getPhotosetByName = (name: string): Photoset | undefined => {
    return photosets.find((photoset) => photoset.name === name);
  };

  const getModelerByName = (name: string): Modeler | undefined => {
    return modelers.find((modeler) => modeler.modelName.name === name);
  };

  const getGalleryByName = (name: string): Gallery | undefined => {
    return galleries.find((gallery) => gallery.name === name);
  };

  const getTagByName = (name: string): Tag | undefined => {
    return tags.find((tag) => tag.name === name);
  };

  const getRandomImages = (
    source: Photoset | Modeler | Tag | Gallery,
    count: number
  ): Image[] => {
    let images: Image[] = [];

    if ('images' in source) {
      images = source.images || [];
    } else if ('path' in source && 'photosets' in source) {
      images =
        source.photosets?.flatMap((photoset) => photoset.images || []) || [];
    } else if ('modelName' in source) {
      images = galleries
        .flatMap((gallery) => gallery.images || [])
        .filter((image) => image.modeler === source);
    } else if (
      'name' in source &&
      !('images' in source) &&
      !('modelName' in source)
    ) {
      images = galleries
        .flatMap((gallery) => gallery.images || [])
        .filter((image) => image.tags?.includes(source));
    }

    const randomImages: Image[] = [];
    for (let i = 0; i < count && images.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * images.length);
      randomImages.push(...images.splice(randomIndex, 1));
    }

    return randomImages;
  };

  return {
    getImageById,
    getPhotosetByName,
    getModelerByName,
    getGalleryByName,
    getTagByName,
    getRandomImages,
  };
}
