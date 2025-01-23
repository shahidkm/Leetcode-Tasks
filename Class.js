class Car{
constructor(name,age,place){
    this.name=name,
    this.age=age,
    this.place=place

}

start(){
    console.log(`hiii ${this.name}`);
    
}

}

let person1=new Car ("shahid",20,"ckd")
person1.start()