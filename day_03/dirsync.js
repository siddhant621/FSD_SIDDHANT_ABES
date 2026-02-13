import fs from "fs/promises";


const readDir = async (path) => {
  try {
    const files = await fs.readdir(path);
    console.log(files);
  } catch (err) {
    console.error("Error reading directory:", err);
  }
};


const makeDir = async (path) => {
  try {
    await fs.mkdir(path, { recursive: true });
    console.log("Directory created successfully");
  } catch (err) {
    console.error("Error creating directory:", err);
  }
};

//
const removeDir = async (path) => {
  try {
    await fs.rm(path, { recursive: true, force: true });
    console.log("Directory removed successfully");
  } catch (err) {
    console.error("Error removing directory:", err);
  }
};

// Example usage
// await makeDir("./test");
// await readDir("./");
// await removeDir("./test");
