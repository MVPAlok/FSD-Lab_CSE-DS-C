import fs from "fs";

// Create Directory
function createDirSync() {
  fs.mkdirSync("myFolder");
  console.log("Directory created");
}

// Read Directory
function readDirSync() {
  const files = fs.readdirSync("myFolder");
  console.log("Files:", files);
}

// Remove Directory
function removeDirSync() {
  fs.rmSync("myFolder", { recursive: true });
  console.log("Directory removed");
}

// Call them
createDirSync();
readDirSync();
removeDirSync();

