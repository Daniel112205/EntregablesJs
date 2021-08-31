//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");
const readFileUsers = async () => {
    //Imprimir en consola el arreglo de usuarios
    const file = path.resolve("users.json");
    try {
        const data = await  fs.readFile(file, 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    } 
};

const writeHelloWorld = async() => {
    //Escribir hello world! en el archivo hello.txt
    const data = "hello world!";
    const file = path.resolve("hello.txt");
    try {
        await  fs.writeFile(file, data,"utf8");
    } catch (error) {
        console.log(error);
    } 
};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    const usersPath = path.resolve("users.json");

    try{
        //Arreglo de usuarios (JSON)
        const data = await fs.readFile(usersPath, "utf8");
        const users = JSON.parse(data); //Convertir de JSON a objeto
        users.push(username);
        await fs.writeFile(usersPath, JSON.stringify(users));
    }catch(error){
        console.log(error);
    }
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
