class Student {
    _name;
    _asignaturas = ["Javascript", "HTML", "CSS"];
    constructor(name, asignaturas){
        this._name = name;
        this._asignaturas = asignaturas;
        }
    getInfo() {
        console.log(`Hola, mi nombre es ${this._name} y mi asignatura ${this._asignaturas}.`);
        }
    }

const nacho = new Student("Nacho", "Javascript");
nacho.getInfo();