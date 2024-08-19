interface CategoryDIP {}

class Drama implements CategoryDIP {}

class MovieDIPSolution {
  constructor(
    private readonly name: string,
    private category: CategoryDIP,
  ) {}

  public getName() {
    return this.name
  }

  public getCategory() {
    return this.category
  }

  public setCategory (category: CategoryDIP) {
    this.category = category
  }
  
}