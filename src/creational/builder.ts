export default class HotDog {
  public ketchup: boolean = false;
  public mostard: boolean = false;
  public kurst: boolean = false;

  constructor(public bun: string) {}

  // BUILDER PATTERN
  addKetchup(): HotDog {
    this.ketchup = true;
    return this;
  }

  addMostard(): HotDog {
    this.mostard = true;
    return this;
  }

  addKurst(): HotDog {
    this.kurst = true;
    return this;
  }
}
