import fs from 'fs';

const writeFileSync = (path, data) => {
    try {
        fs.writeFileSync(path, data);
        console.log("Data has been written successfully");
    } catch (error) {
        console.log("Error while writing data:", error);
    }
};

const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, "utf-8");
        console.log(data);
    } catch (error) {
        console.log("Error while reading data:", error);
    }
};

const appendFileSync = (path, data) => {
    try {
        fs.appendFileSync(path, data);
        console.log("Data has been appended successfully");
    } catch (error) {
        console.log("Error while appending data:", error);
    }
};
console.log("Before writing data");
writeFileSync("./example.txt","This data is written thriugh sync fun:'writeFileSync'");
console.log("After writing data");
console.log("Before reading data");
readFileSync("./example.txt");
console.log("After reading data");  
console.log("Before appending data");
appendFileSync("./example.txt","This data is appended thriugh sync fun:'appendFileSync'");
console.log("After appending data");    




// readFileSync("./example.txt");
// writeFileSync("./example.txt","This data is written thriugh sync fun:'writeFileSync'");


