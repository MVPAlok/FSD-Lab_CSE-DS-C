// // import fs from "fs/promises";

// // async function fileWork() {
// //   try {
// //     await fs.writeFile("test.txt", "Hello");
// //     console.log("File done!");
// //     const data = await fs.readFile("test.txt", "utf-8");
// //     console.log("File content:", data);
// //   } catch (error) {
// //     console.log("Error:", error);
// //   }
// // }

// // fileWork();


// import fs from "fs/promises";

// try {
//   // Write file
//   await fs.writeFile("test.txt", "Hello");
//   console.log("File written!");

//   // Read file
//   const data = await fs.readFile("test.txt", "utf-8");
//   console.log("File content:", data);

//   // Remove directory
//   await fs.rm("myFolder", { recursive: true });
//   console.log("Directory removed!");

// } catch (error) {
//   console.log("Error:", error.message);
// }

// // // Function to read directory
// // import fs from "fs/promises";

// // async function readDirectory(folderPath) {
// //   try {
// //     const files = await fs.readdir(folderPath);
// //     console.log("Files:", files);
// //   } catch (error) {
// //     console.log("Error :", error.message);
// //   }
// // }

// // // Call function
// // readDirectory("myFolder");




import fs from "fs/promises";

// Create Directory
async function createDir() {
  await fs.mkdir("myFolder");
  console.log("Directory created");
}

// Read Directory
async function readDir() {
  const files = await fs.readdir("myFolder");
  console.log("Files:", files);
}

// Remove Directory
async function removeDir() {
  await fs.rm("myFolder", { recursive: true });
  console.log("Directory removed ");
}

// Call them
async function runAsync() {
  await createDir();
  await readDir();
  await removeDir();
}

runAsync();

