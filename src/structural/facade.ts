class PumblingSystem {
  setPressure(v: number) {
    console.log("[FACADE] -> setPressure");
  }
  turnOn() {
    console.log("[FACADE] -> turnOn pumbling");
  }
  turnOff() {
    console.log("[FACADE] -> turnOff pumbling");
  }
}

class EletricalSystem {
  setVoltage(v: number) {
    console.log("[FACADE] -> setVoltage");
  }
  turnOn() {
    console.log("[FACADE] -> turnOn eletrical");
  }
  turnOff() {
    console.log("[FACADE] -> turnOff eletrical");
  }
}

class House {
  private pumblingSystem = new PumblingSystem();
  private eletricalSystem = new EletricalSystem();

  turnOnSystems() {
    this.pumblingSystem.setPressure(500);
    this.eletricalSystem.setVoltage(150);
    this.pumblingSystem.turnOn();
    this.eletricalSystem.turnOn();
  }

  shutDown() {
    this.pumblingSystem.turnOff();
    this.eletricalSystem.turnOff();
  }
}
