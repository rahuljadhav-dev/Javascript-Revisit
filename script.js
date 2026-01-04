// let username=document.getElementById('username').value;
// console.log(username);

const person={
    username:'Rahul Jadhav',
    age:0,
};

person.username='R Jadhav';
console.log(person);

let i="6a";
let j=8;

let result_one=i+j;
let result_two=i-j;

console.log(result_two);

console.log(typeof(result_one));
console.log(typeof result_two);

console.log("a"-6);


console.log(typeof NaN);






function getUserName(){
 this.username= document.getElementById('username').value;
}
   

//print numbers from one to ten
for(let i=1;i<=10;i++){
    console.log(i);
    
}

//print numbers from ten to one using while loop
let value=10;
while(value>=1){
    console.log(value);
    value--;
}

//print even number from 1 to 20
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log("Even Number :"+i);
        
    }else
        console.log("Odd Number :"+i);
        
}