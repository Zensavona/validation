import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.firstName = 'John';
    this.validation = validation.on(this)
      .ensure('firstName')
        .isNotEmpty()
        .hasLengthBetween(3,10);
  }
}