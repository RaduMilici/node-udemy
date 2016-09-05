'use strict';

class Car{
  
  constructor(options){
    this.title = options.title;
  }
  
  drive(){ 
    console.log(this.title + ' is driving.'); 
  }
  
}

class Citroen extends Car{
  
  constructor(options){
    super(options);
    this.color = options.color;
  }
  
  honk(){
    console.log('A ' + this.color + ' ' + this.title + ' is honking.');
  }
  
}

const citroen = new Citroen({ title: 'Citroen', color: 'silver' });
console.log(citroen);
citroen.drive();
citroen.honk();