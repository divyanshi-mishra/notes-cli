var square =x=>x*x;
console.log(square(9));

var user={
  name: 'divyanshi',
  sayHi: ()=>{
    console.log(`Hi. im ${this.name}`);
  },
  sayHiAlt(){
    console.log(arguments);
      console.log(`Hi. im ${this.name}`);
  }
};
user.sayHiAlt(1,2,3);
