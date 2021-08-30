//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");
const readFileUsers = () => {
    //Imprimir en consola el arreglo de usuarios
    const file = path.resolve("users.json");
    fs.readFile(file, 'utf8')
	.then((data) => {
		res.send(data);
	})
	.catch((error) => {
		console.log(error);
	});
};

const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    const data = "hello world!";
    const file = path.resolve("hello.txt");
    fs.writeFile(file, data, (error) => {
        if(error){
            return console.log(error);
        }else{
            return console.log("Se ha escrito correctamente en el archivo");
        }
    })
};

const addUser = (username) => {
    //Agregar un usuario en la lista users.json
    const data = username;
    const file = path.resolve("users.json");
    const file2 = path.resolve("users.json");
    fs.readFile(file2, 'utf8')
	.then((data) => {
		res.send(data);
	})
	.catch((error) => {
		console.log(error);
	});
    
    fs.writeFile(file, data, (error) => {
        if(error){
            return console.log(error);
        }else{
            return console.log("Se ha escrito correctamente en el archivo");
        }
    })
    
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
