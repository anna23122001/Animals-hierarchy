class Animals {
    constructor(age, name, weight, limbAmount){
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }
   move(){
    return `Тварини рухаються`
   }
   say(){
    return `Тварини говорять`
   }
   eat(){
    return `Тварини харчуються`
   }
};

class Mammals extends Animals{};
class Predators extends Mammals{};
class Whales extends Mammals{};
class Primates extends Mammals{};

class Birds extends Animals{
    static maxAge = 15;
    static maxWeight = 30;

constructor(age, name, weight, limbAmount){
        super(age, name, weight, limbAmount);
    }
    move(){
        return `Птахи літають`
           }
    say(){
        return `Птахи щебечут`
           }
    eat(){
        return `Птахи харчуються`
           }
    static isBirds(obj) {
        return obj instanceof Birds;
    } 
};

class Fish extends Animals{
    static maxAge = 15;
    static maxWeight = 100;

constructor(age, name, weight, limbAmount){
        super(age, name, weight, limbAmount);
    }
    move(){
        return `Риби плавають`
           }
    say(){
        return `Риби не говорять`
           }
    eat(){
        return `Риби харчуються`
           }
    static isFish(obj) {
        return obj instanceof Fish;
        }
};

class Dog extends Predators{
    static maxAge = 18;
    static maxWeight = 150;

constructor(age, name, weight, limbAmount){
        super(age, name, weight, limbAmount);
    }
    move(){
        return `Собаки бігають`
           }
    say(){
        return `Собаки гавкають`
           }
    eat(){
        return `Собаки харчуються`
           }

    static isDog(obj) {
        return obj instanceof Dog;
        };
}

class Dolphin extends Whales{
    static maxAge = 20;
    static maxWeight = 120;

constructor(age, name, weight, limbAmount){
        super(age, name, weight, limbAmount);
    }
    move(){
        return `Дельфіни плавають`
            }
    say(){
        return `Дельфіни не говорять`
            }
    eat(){
        return `Дельфіни харчуються`
            }

    static isDolphin(obj) {
        return obj instanceof Dolphin;
    };
}
class Human extends Primates{
    static maxAge = 120;
    static maxWeight = 300;

constructor(age, name, weight, limbAmount){
        super(age, name, weight, limbAmount);
    }
    move(){
        return `Люди ходять`
            }
    say(){
        return `Люди говорять`
            }
    eat(){
        return `Люди харчуються`
            }

    static isHuman(obj) {
        return obj instanceof Human;
    };
}

const frog = new Animals(2, 'Frog', '2 kg', 4);
console.log(frog);
console.log(frog.move());
console.log(frog.say());
console.log(frog.eat());

const rabbit = new Animals(5, 'Rabbit', '5 kg', 4);
console.log(rabbit);
console.log(rabbit.move());
console.log(rabbit.say());
console.log(rabbit.eat());

const colibri = new Birds(1, 'Colibri', '100g', 4)
console.log(colibri);
console.log(colibri.move());
console.log(colibri.say());
console.log(colibri.eat());

const eagle = new Birds(10, 'Eagle', '3kg', 4)
console.log(eagle);
console.log(eagle.move());
console.log(eagle.say());
console.log(eagle.eat());

const salmon = new Fish(5, 'Salmon', '5kg', 3)
console.log(salmon);
console.log(salmon.move());
console.log(salmon.say());
console.log(salmon.eat());

const akita= new Dog(4, 'Akita', '14kg', 4)
console.log(akita);
console.log(akita.move());
console.log(akita.say());
console.log(akita.eat());

const dolphin = new Dolphin(10, 'Dolphin', '100kg', 3)
console.log(dolphin);
console.log(dolphin.move());
console.log(dolphin.say());
console.log(dolphin.eat());

const anna = new Human(21, 'Anna', '65kg', 4)
console.log(anna);
console.log(anna.move());
console.log(anna.say());
console.log(anna.eat());

console.log(Human.isHuman(anna));
console.log(Human.isHuman(akita));
