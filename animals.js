
// CHECK THE README FILE TO UNDERSTAND HOW I DID THE CODE BECAUSE I DID MORE RESAERCH ON THIS AND I AM GLAD I SUCCEEDED

// Base class representing an Animal
class Animal {
    // Constructor to initialize common properties
    constructor(name, hasBackbone, isColdBlooded) {
        this.name = name; // Animal name
        this.hasBackbone = hasBackbone; // Whether the animal has a backbone
        this.isColdBlooded = isColdBlooded; // Whether the animal is cold-blooded
    }
}

// Subclass for Arthropoda (animals without backbones)
class Arthropoda extends Animal {
    // Constructor for Arthropoda
    constructor(name) {
        super(name, false, true); // Arthropoda is cold-blooded and doesn't have a backbone
    }
}

// Subclass for Fish (animals with backbones)
class Fish extends Animal {
    // Constructor for Fish
    constructor(name) {
        super(name, true, false); // Fish is cold-blooded and has a backbone
    }
}

// Subclass for Amphibia (animals with backbones)
class Amphibia extends Animal {
    // Constructor for Amphibia
    constructor(name) {
        super(name, true, false); // Amphibia is cold-blooded and has a backbone
    }
}

// Subclass for Reptile (animals with backbones)
class Reptile extends Animal {
    // Constructor for Reptile
    constructor(name) {
        super(name, true, true); // Reptile is cold-blooded and has a backbone
    }
}

// Subclass for Aves (animals with backbones)
class Aves extends Animal {
    // Constructor for Aves
    constructor(name) {
        super(name, true, false); // Aves (birds) is warm-blooded and has a backbone
    }
}

// Subclass for Mammal (animals with backbones)
class Mammal extends Animal {
    // Constructor for Mammal
    constructor(name) {
        super(name, true, true); // Mammal is warm-blooded and has a backbone
    }
}

// Create instances of the Animal classes
const spider = new Arthropoda('Spider'); // Arthropoda instance
const salmon = new Fish('Salmon'); // Fish instance
const frog = new Amphibia('Frog'); // Amphibia instance
const snake = new Reptile('Snake'); // Reptile instance
const eagle = new Aves('Eagle'); // Aves instance
const dog = new Mammal('Dog'); // Mammal instance

// Display the properties of each animal
console.log("Spider:", spider);
console.log("Salmon:", salmon);
console.log("Frog:", frog);
console.log("Snake:", snake);
console.log("Eagle:", eagle);
console.log("Dog:", dog);