import fs from "fs";

const status = async (path) => {
  try {
    const stats = await fs.stat(path);
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.size);
    
    console.log(stats.isDirectory());
  } catch (error) {
    console.log("unable to check status");
  }
};

status("../day_02");
