class Course {
  constructor(
    private name: string,
    private category: string,
    private description: string,
    private database: string[],
  ){}

  public connectionWithDatabase() {
    this.database = []
  }

  public createCategory () {
    return this.database.push(this.category)
  }

  public createCourse() {
    return this.database.push(this.name)
  }

  public getName() {
    return this.name
  }

  public setName(name: string) {
    this.name = name
    return name
  }

  public getCategory () {
    return this.category
  }

  public getDescription () {
    return this.description
  }
}