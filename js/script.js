const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const fuel = document.getElementById("fuel");
const canister = document.getElementById("canister");
const upCar = 90
const downCar = 270
const leftCar = 0
const rightCar = 180

// Dodać bak, funkcja tankowania ma dodawać 5 do baku, funkcja wyświetlania nazwy samochodu - JEST

// function carModel(model, przebieg, bak) {
//     this.model = model,
//     this.przebieg = przebieg,
//     this.bak = bak,
//     this.jedz = function() {
//         this.przebieg += 5;
//         return this.przebieg;
//     }
//     this.tankuj = function() {
//         this.bak +=5;
//         return this.bak;
//     }
//     this.nazwa = function() {
//         this.model = model;
//         return this.model;
//     }
// }

// let maluch = new carModel('fiat', 1000, 30);
// let polonez = new carModel('FSO', 6000, 20);

// maluch.jedz()

// dodać funkcję która po wywołaniu doda span do html-a z nazą modelu

function carModel(carBrand, modelName, carMilage) {
    this.brand = carBrand;
    this.model = modelName;
    this.milage = carMilage;
    this.go = function() {
        this.milage += 5;
        return this.milage;
    };
    this.el = document.createElement('span');
    this.append =  function() {
        this.el.innerHTML = ` ${this.model} `;
        document.body.appendChild(this.el);
    }
    this.hide = function() {
        this.el.style.display = 'none';
    }
    this.show = function() {
        this.el.style.display = 'inline-block';
    }
    this.remove = function() {
        this.el.parentNode.removeChild(this.el);
    }
}

let maluch = new carModel('fiat', "Panda", 30);
let polonez = new carModel('FSO', "polonez", 20);
let opel = new carModel('opel', "astra", 20);
let renault = new carModel('renault', "laguna", 20);
let seat = new carModel('seat', "Ibiza", 20);
let skoda = new carModel('skoda', "Octavia", 20);

maluch.append();
polonez.append();
opel.append();
renault.append();
seat.append();
skoda.append();



// let myCar = {
//   car: document.getElementById("car"),
//   tank: 30,
//   y: 100,
//   x: 100,
//   canister: 30,
//   showName: function(){
//     console.log('seiko');
//   },
//   showTank: function(){
//     fuel.innerHTML = this.tank;
//   },
//   hideCar: function(){
//     this.car.style.display = 'none'
//   },
//   showThis: function(){
//     console.log(this);
//   }
// }

// samochód ma:
// spalać benzynę ma bak 50 l 
// po wjechaniu na stację ma tankować do momentu wyjechania ze stacji
// po wjechaniu na pole x od 0 - 100 i y 0 - 100

// const combustion = () => {
//   myCar.tank -= 0.5; // myCar.tank = myCar.tank - 0.5
// }
// const gasTank = () => {
//   if((myCar.x < 100 && myCar.x > 0) && (myCar.y < 100 && myCar.y > 0) )
//   myCar.tank = 50;
// }
// const fillFromCanister = () => {
//     if((myCar.tank < 45) && (myCar.canister > 5)) {
//         myCar.tank += 5;
//         myCar.canister -= 5;
//     }
//   }

// const carReposition = (positionChangeX, positionChangeY, rotation) => {
//   if (myCar.tank > 0){
//     myCar.y += positionChangeY;
//     myCar.x += positionChangeX;
//     myCar.car.style.top = `${myCar.y}px`;
//     myCar.car.style.left = `${myCar.x}px`;
//     myCar.car.style.transform = `rotate(${rotation}deg)`;
//     combustion();
//     gasTank();
//     fuel.innerHTML = myCar.tank;
//   }
// }
// carReposition(0, 0, leftCar);

// const keyboard = (e) => {
//   console.log(e);
//   if (e.code == 'ArrowRight') carReposition(3, 0, rightCar)
//   else if (e.code == "ArrowLeft") carReposition(-3, 0, leftCar)
//   else if (e.code == "ArrowUp") carReposition(0, -3, upCar)
//   else if (e.code == "ArrowDown") carReposition(0, 3, downCar)
// }


// up.addEventListener("click", () => {carReposition(0, -3, upCar)});
// down.addEventListener("click", () =>{carReposition(0, 3, downCar)});
// left.addEventListener("click", () =>{carReposition(-3, 0, leftCar)});
// right.addEventListener("click", () =>{carReposition(3, 0, rightCar)});
// canister.addEventListener("click", fillFromCanister);
// document.addEventListener("keydown", (e) =>{keyboard(e)});