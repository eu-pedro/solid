class Category {}

class MovieDIP {
  private name = '';
  private category = {}

  public getName() {
    return this.name
  }

  public setName(name: string){
    this.name = name
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(category: Category) {
    this.category = category
  }
}