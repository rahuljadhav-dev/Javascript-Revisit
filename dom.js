let h1=document.querySelector("h1");
// console.dir(h1);
h1.innerText="Hey Rahul..."
h1.style.color="blue";
h1.style.backgroundColor="green"
h1.style.padding="5px"
h1.style.fontFamily="Aerial"
h1.style.fontFamily="Verdana"
console.dir(h1);
h1.hidden=false;

let body=document.querySelector("body");
body.style.backgroundColor="grey";

let div=document.querySelector("div");
// div.classList.add("ashu");

// div.style.width="50px";
// div.style.height="60px";
// div.style.backgroundColor="red";

let p=document.createElement("p");
p.innerText="this is my first para";
div.prepend(p);
div.append(h1);

let status=true;

h1.addEventListener("dblclick",()=>{
    if(status){
        h1.style.color="red";
        status=false;
    }
})
