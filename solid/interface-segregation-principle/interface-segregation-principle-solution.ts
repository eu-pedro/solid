interface MoviePropsSolution {
  play(): void
};


interface AudioControlPropsSolution {
  increaseVolume(): void
}

class TheLionKingSolution implements MoviePropsSolution , AudioControlPropsSolution{
  increaseVolume(): void {
    // increase volume
  }

  play(): void {
    // play movie
  }
}

class ModernTimesSolution implements MoviePropsSolution {
  play(): void {
      
  }
 
}