import {readFile} from './utils/readFile.js';
const FILE = "../users.json";
const userLogin = async (userDetails) =>{
    const {email, password} = userDetails;
    const users = await readFile(FILE);
    if (users.length === 0){
        console.log("user is not registered.");
        return;
    }

    const user = users.filter((u) =>  u.email == email);
    if (user.length === 0){
        console.log("user is not registered.");
        return;
    }
    user[0].password === password ? console.log("login successful") : 
    console.log("incorrect password");

}

userLogin({
    email : "hsturrock0@mapquest.com",
    password : "nL2{2pP\"A15$"
});
userLogin({
    email : "jwildin1@cocolog-nifty.com",
    password : "vU3)Kq(AH0oyJ3"
});
userLogin({
    email : "omcgookin2@gmpg.org",
    password : "jG9\\K'.Y~Ez`OTIZ"
});  