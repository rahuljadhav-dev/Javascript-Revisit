let arr=[4,5,6,7,8,9];

let sum=arr.reduce((base,val)=>{
    return base+=val;
},0);

console.log("Total sum :"+sum);

let even=[];
arr.map((value,i)=>{
    if(i%2==0)
       even.push(value);
});

console.log(even);

let sl=even.slice(0,1);
console.log("After Slice :"+even);
console.log(sl);

let spl=even.splice(0,1);
console.log("After Splice :"+even);
console.log(spl);





