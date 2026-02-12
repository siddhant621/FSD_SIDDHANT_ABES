import fs from "fs/promises";

const removeDir = async(path)=>{
    try{
        await fs.rmdir(path);
        console.log("dir has been removed");
    } catch (error) {
        console.log("unale to remove");
        
    }
}

removeDir("../day_05")
const readDir = async(path)=>{
    try{
        const data = await fs.readDir(path);
        console.log(data);
    }
    catch (error) {
        console.log("unable to read");       
    }
}
readDir("../day_02");



const makeDir = async(path)=>{
  try{
    await fs.mkdir(path);
    console.log("folder has been created sucessfully");
  } catch (error) {
    console.log("unable to make dir");
  }
}
makeDir("../day_07");