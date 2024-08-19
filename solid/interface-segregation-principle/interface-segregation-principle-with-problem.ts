interface MovieProps {
  play(): void
  increaseVolume(): void
};

class TheLionKing implements MovieProps {
  increaseVolume(): void {
    // increase volume
  }

  play(): void {
    // play movie
  }
}

class ModernTimes implements MovieProps {
  increaseVolume(): void {
    // method not allowed
  }

  play(): void {
    // play movie
  }
}