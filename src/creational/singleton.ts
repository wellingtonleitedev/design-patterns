export default class GameSettings {
  static instance: GameSettings;
  public player: any = {};

  private constructor() {}

  // singleton pattern
  static getInstance() {
    if (!this.instance) {
      this.instance = new GameSettings();
    }

    return this.instance;
  }
}
