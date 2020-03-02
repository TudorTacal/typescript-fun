@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Ups this boat is sunk') // runs when the class is defined not instantiated
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('the boat is not moving');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);

}
// first argument target is the prototype of the class
function testDecorator(target: any, key: string) {
  console.log('Key', key);
}

// decorator factory
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}