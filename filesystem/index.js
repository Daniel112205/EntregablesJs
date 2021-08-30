//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");
const readFileUsers = () => {
    //Imprimir en consola el arreglo de usuarios
    const file = path.resolve("users.json");
    fs.readFile(file, 'utf8',(error, data) => {
        if(error){
            return console.log(error);
        }
        return console.log(data.toString());
    })
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
    const file = path.resolve("users.json");
    fs.readFile(file, 'utf8', function (error, data){
        if (error){
            return console.log(error);
        }else{
            let value = data.toString();
            value = JSON.parse(value);
            value.data.push(username);
            let str = JSON.stringify(value);
            fs.writeFile(file, str, function (error){
                if(error){
                    return console.log(error);
                }else{
                    return console.log("Se ha escrito correctamente en el archivo");
                }
            });
        }
    });
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
