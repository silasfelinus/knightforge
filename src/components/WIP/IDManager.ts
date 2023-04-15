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
