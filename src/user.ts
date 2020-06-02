export default class User {
  constructor(private readonly name: string) {}

  greeter() {
    return this.name == "Glayson" ? "Supreme Lord" : "Sra. " + this.name;
  }
}
