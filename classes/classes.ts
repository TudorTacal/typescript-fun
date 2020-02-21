class Vehicle {
  constructor(public color: string) {
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car1 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car1 = new Car1(4, 'red');
car1.startDrivingProcess();

