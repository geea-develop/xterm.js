export class GridCache<T> {
  public cache: T[][];

  public constructor() {
    this.cache = [];
  }

  public resize(width: number, height: number) {
    for (let x = 0; x < width; x++) {
      if (this.cache.length <= x) {
        this.cache.push([]);
      }
      for (let y = this.cache[x].length; y < height; y++) {
        this.cache[x].push(null);
      }
      this.cache[x].length = height;
    }
    this.cache.length = width;
  }
}
