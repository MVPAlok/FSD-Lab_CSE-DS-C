const mypromise = new Promise((resolve, reject)=>{
let age = 25;
if(age > 18){
    resolve("You are eligible to vote");
} else{
    reject("You are not eligible to vote");
}
});

// mypromise.then((message)=>{             
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message);
// })

const f1 = async ()=>{
    const message = await mypromise;
    console.log(message);
}
f1();