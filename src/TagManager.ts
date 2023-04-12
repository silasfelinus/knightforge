// TagManager.ts
import { Tag } from './stores/types';

export class TagManager {
  private tags: Map<number, Tag>;

  constructor() {
    this.tags = new Map();
  }

  addTag(tagId: number, tag: Tag): boolean {
    if (this.tags.has(tagId)) {
      return false; // Tag ID already exists
    }

    this.tags.set(tagId, tag);
    return true; // Tag added successfully
  }

  removeTag(tagId: number): boolean {
    return this.tags.delete(tagId);
  }

  getTag(tagId: number): Tag | undefined {
    return this.tags.get(tagId);
  }

  getAllTags(): Tag[] {
    return Array.from(this.tags.values());
  }

  getTagId(tagName: string): number | undefined {
    for (const [tagId, tag] of this.tags.entries()) {
      if (tag.name === tagName) {
        return tagId;
      }
    }
    return undefined;
  }
}

// IDManager.ts
export class IDManager {
  private currentId: number;

  constructor() {
    this.currentId = 0;
  }

  getNextId(): number {
    this.currentId += 1;
    return this.currentId;
  }
}
