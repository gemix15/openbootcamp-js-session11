class Estudiante {
    nombre;
    asignaturas = ["Javascript", "HTML", "CSS"];

    constructor(nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    obtenDatos(){
        return this;
    }
}

const estudiante1 = new Estudiante("Gemma", "HTML");
console.log(estudiante1.obtenDatos());