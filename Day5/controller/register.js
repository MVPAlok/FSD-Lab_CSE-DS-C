import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writeFile.js";
const FILE = "../users.json";

const register = async (users, userDetails) => {
    users.push(userDetails);
    await writeFile(FILE, users);
    console.log("User registered successfully");
};

const userRegistration = async(userDetails) => {
    const {name, email, password, gender} = userDetails;

    if(!name || !email || !password || !gender){
        console.log("All fields are required.");
        return;
    }

    const users = await readFile(FILE);
    if(users.length === 0){
        register(users, userDetails);
        return;
    }

    const existinguser = users.filter((u) => u.email == email);
    if(existinguser.length !== 0){
        console.log("user is already registered.");
        return;
    }
    register(users, userDetails);
};

export default userRegistration;