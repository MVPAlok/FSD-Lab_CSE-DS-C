import fs from "fs/promises";

async function readAndWrite() {
  try {
    console.log("Reading file...");

    const data = await fs.readFile("students.json", "utf-8");
    console.log("File data:", data);

    const students = JSON.parse(data);

    await fs.writeFile(
      "studentsCopy.json",
      JSON.stringify(students, null, 2)
    );

    console.log("File copied successfully ✅");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

readAndWrite();