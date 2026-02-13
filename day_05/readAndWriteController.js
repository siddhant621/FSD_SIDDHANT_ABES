import readJsonFile from "./readAndWriteServices";

const student = [
    {
  "id": 10,
  "first_name": "Lind",
  "last_name": "Kas",
  "email": "lkas9@php.net",
  "gender": "Female"
}
]

const readFile = async(path) => {
    try {
        const data = await readJsonFile(path);
        console.log(data);
        
    } catch (error) {
        console.log("unable to read fie");
    }
}

const writeFile = async (path, data) => {
    let status = 0;
    let message = "";
    try {
        const fileData = await readJsonFile(path);
        let updatedData = []

        if (!fileData) updatedData = [{ id: 1, ...data }]
        else updatedData = [...fileData, { id: fileData.length + 1, ...data}];

        await writeJsonFile(path, updatedData);
        status = 200;
        message = "Data has been updated successfully."
    } catch (error) {
        status = 500;
        message = `unable to update ${error}`
    }
    return {status,message}
}
writeFile("./students.json", student);