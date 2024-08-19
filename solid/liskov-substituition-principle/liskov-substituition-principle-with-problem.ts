export class Movie {
  public play() {
    // play movie
  }
  public increaseVolume() {
    // increase volume
  }
}

class TheLionKing extends Movie {
  public increaseVolume(): void {
    // increase volume
  }
}

class ModernTimes extends Movie {
  public increaseVolume(): void {
    // method not allowed
  }
}