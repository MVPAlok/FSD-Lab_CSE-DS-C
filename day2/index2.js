import { read } from 'fs';
import fs from 'fs/promises';
import fs from 'fs/promises';
const write = async(path,data )=>{
    try{
        await fs.writeFile(path,data);
        console.log("DAta has been written successfully");
    }
    catch(error){
        console.log("Error while writing data:",error);
    }

}
const readFile = async(path)=>{
    try{
        const data = await fs.readFile(path,"utf-8");
        console.log(data); 
    }
    catch(error){
        console.log("Unable to read data:");
    }
}
const writeFile = async(path,data)=>{
    try{
        await fs.writeFile  (path,data);
        console.log("DAta has been written successfully");
    }  catch(error){
        console.log("Error while writing data:",error);
    }
}
const appendFile = async(path,data)=>{
    try{
        await fs.appendFile(path,data);
        console.log("Data has been appended successfully");
    }catch(error){
        console.log("Error while appending data:",error);
    }
}
// readFile("./example.txt");

// writeFile   ("./example2.txt","This data is written thriugh async fun()");

console.log("Before writing data");
writeFile("./example.txt","This data is written thriugh async fun()");
console.log("After writing data");
console.log("Before reading data");
readFile("./example.txt");
console.log("After reading data");  
console.log("Before appending data");
appendFile("./example.txt","This data is appended thriugh async fun()");
console.log("After appending data");    
// appendFile("./example.txt","This data is appended thriugh async fun()");