import fs from "fs/promises";

async function statusName(fileName) {
  try {
    await fs.stat(fileName);
    console.log("File exists");
  } catch (error) {
    console.log("File does NOT exist");
  }
}

statusName("test.txt");
