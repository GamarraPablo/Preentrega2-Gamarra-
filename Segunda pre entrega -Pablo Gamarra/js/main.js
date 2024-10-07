
let nombre=prompt("Ingrese su nombre");
let apellido=prompt ("Ingrese su apellido");
let ciudad=prompt("Ingrese su ciudad")

const persona = {nombre:nombre, apellido:apellido, ciudad:ciudad};

alert (persona.nombre);
alert (persona.apellido);
alert (persona.ciudad);

function Bebida (nombre, precio){
    this.nombre = nombre; 
    this.precio = precio;
    } 

const bebida1 = new Bebidas ("Pepsi", "350")
consol.log(Bebida)


class Curso {
    constructor(nombre, duracion, precio){
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = precio;
    }
}
const Curso1 = new Curso ("Python", "30", "25000")
consol.log(Curso)

