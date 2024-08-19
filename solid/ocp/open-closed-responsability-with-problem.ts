class VideoProblem {
  constructor(
    private type: string
  ) {}

  public calculaInteresse() {
    if(this.type === 'movie') {
      // calcula o interesse do usuário baseado em filme
    }
    if(this.type === 'TVShow') {
      // calcula o interesse do usuário baseado em tvshow
    }
  }
}