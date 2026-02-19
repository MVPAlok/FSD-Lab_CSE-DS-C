const fs = require("fs").promises;

async function readFileData() {
  try {
    const data = await fs.readFile("students.json", "utf-8");

    const students = JSON.parse(data);

    console.log("Students Data:");
    console.log(students);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

readFileData();