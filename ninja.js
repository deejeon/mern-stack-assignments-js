class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this);
    }

    drinkSake() {
        this.health += 10;
    }
}

const daniel = new Ninja('Daniel', 100);

console.log(daniel);
daniel.showStats();
daniel.drinkSake();
daniel.showStats();