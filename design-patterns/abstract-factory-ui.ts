interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements GUIFactory {
  public createButton(): Button {
    return new WinButton();
  }

  public createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {
  public createButton(): Button {
    return new MacButton();
  }

  public createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

interface Button {
  paint(): string;
}

interface Checkbox {
  paint(): string;
}

class WinButton implements Button {
  public paint(): string {
    return "Paiting win button";
  }
}

class MacButton implements Button {
  public paint(): string {
    return "Painting mac button";
  }
}

class WinCheckbox implements Checkbox {
  public paint(): string {
    return "Paiting win checkbox";
  }
}

class MacCheckbox implements Checkbox {
  public paint(): string {
    return "Paiting mac checkbox";
  }
}

class Application {
  private factory: GUIFactory;
  private button: Button;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  createUI() {
    this.button = this.factory.createButton();
  }

  paint() {
    this.button.paint;
  }
}

class ApplicationConfigurator {
  main() {
    const config = { OS: "Mac" }; //readApplicationConfigFile();
    let factory: GUIFactory;

    if (config.OS == "Windows") {
      factory = new WinFactory();
    } else if (config.OS == "Mac") {
      factory = new MacFactory();
    } else {
      throw new Error("Error! Unknown operating system.");
    }

    const app: Application = new Application(factory);
  }
}

/**
 * Pros
 * You can be sure that the products you're getting from a factory are compatible with each other
 * You avoid tight coupling between concrete products and client code
 * Single Responsability Principle. You can extract the product creation code into one place, making the code easier to support
 * Open/Close Principle. You can introduce new variants of products withouht breaking existing client code
 */
