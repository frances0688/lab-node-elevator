class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "up";
    this.waitingList= [];
    this.passengers = [];
  }
  
  start() { 
    this.interval = setInterval(()=>{
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
   }

  update() { 
    console.log(this.log());
  }

  _passengersEnter() { 

  }

  _passengersLeave() {

   }

  floorUp() {
    if (this.floor < this.MAXFLOOR){
    return this.floor += 1;
    }
   }

  floorDown() { 
    if (this.floor > 0){
      return this.floor -= 1;
    }
  }

  call(person) { 
    this.requests.push(person);
  }

  log() { 
    return `Direction: ${this.direction} | Floor:  ${this.floor}`
  }
}

module.exports = Elevator;
