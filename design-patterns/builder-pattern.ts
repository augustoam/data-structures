/**
 * Using the Vuilder pattern makes sense only when your products
 * are quite complex and require extensive configuration. The
 * Following two products are related, alghough they don't have a common interface
 */

class Car {
  /**
   * A car can have a GPS, trip computer and some number of seats.
   * Different models of cars (sports car, SUV, cabriolet) might have
   * differet features installed or enabled
   */
}

class Manual {
  /**
   * Each car should have a user manual that corresponds to
   * the car's configuration and describes all its features
   */
}

interface Builder {
  reset();
  setSeats();
  setEngine();
  setTripComputer();
  setGPS();
}

/**
 * The concrete builder classes follow the builder interface and
 * provide specific implementations of the building steps. Your
 * program may have several variations of the builders, each
 * implemented differently
 */

class CarBuilder implements Builder {
  private car: Car;

  // A fresh builder instance should contain a blank product object which it uses in further assembly
  constructor() {
    this.reset();
  }

  reset() {
    this.car = new Car();
  }

  setSeats() {}

  setEngine() {}

  setTripComputer() {}

  setGPS() {}

  /**
   *
   * Concrete builders are supposed to provide their own
   * methods for retriving results. That's because various
   * types of builders may create entirely different products
   * that don't all follow the same interface. Therefore such
   * methods can't be declared in the builder interace (at least
   * not in a statically-typed programming language)
   *
   * Usually, after returning the end result to the client, a
   * builder instance is expected to be ready to start producing another product.
   * That's why it's a usual practice to call the reset method at the end of the
   * getProduct method body. However, this behavior isn't mandatory
   */
  getProduct(): Car {
    const product = this.car;
    this.reset();
    return product;
  }
}

/**
 * Unlike other creational patterns builder lets you construct
 * products that don't follow the common interface
 */

class CarManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.reset();
  }

  reset() {
    this.manual = new Manual();
  }

  setSeats() {}

  setEngine() {}

  setTripComputer() {}

  setGPS() {}

  getProduct(): Manual {
    return this.manual;
  }
}

/**
 * The director is only responsible for executing the building
 * steps in a particular sequence. It's helpful when producing
 * products according to a specific order or config.
 * Strictly speaking, the director class is optional, since the
 * client can control builder directly
 */

class Director {
  constructSportsCar(builder: Builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine(new SportEngine());
    builder.setTripComputer(true);
    builder.setGPS(true);
  }

  constructSUV(builder: Builder) {}
}

/**
 * The client conde creates a builder object, passes it to the director
 * and then initiates the construction process. The end result is retrieved
 * from the builder object
 */
class Application {
  makeCar() {
    const director = new Director();

    const carBuilder: CarBuilder = new CarBuilder();
    director.constructSportsCar(carBuilder);
    const car: Car = carBuilder.getProduct();

    const manualBuilder: CarManualBuilder = new CarManualBuilder();
    director.constructSportsCar(manualBuilder);
    const manual: Manual = manualBuilder.getProduct();
  }
}

/**
 * Use builder pattern to get rid of "telescoping constructor"
 * class Pizza {
    Pizza(int size) { ... }
    Pizza(int size, boolean cheese) { ... }
    Pizza(int size, boolean cheese, boolean pepperoni) { ... }

 * Use builder pattern when you want your code to be able to create different
 * representations of some product (for example, stone and wooden houses)
 * 
 * You can resuse the same construction code when building various representations of products
 * Single Repsonsability Principle. you can isolate complex construction code from the business logic of the product
 */
