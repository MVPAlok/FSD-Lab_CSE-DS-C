import fs from "fs/promises";
export const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, JSON.stringify(data));
        console.log("User data saved successfully");
    } catch (error) {
        console.log("unable to write data");
    }
};