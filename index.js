// Una cadena de texto con tu Nombre
var name = "Nacho";
console.log(name);

// Otra cadena de texto con tu Apellido
var familyName = "Campos Martí";
console.log(familyName);

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
var student = name.concat(" ", familyName);
console.log(student);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
var mayusStudent = student.toUpperCase();
console.log(mayusStudent);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
var minusStudent = student.toLowerCase();
console.log(minusStudent);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
var genericStudent = "estudiante";
var numChar = genericStudent.length;
console.log(numChar);

// Una variable que contenga la primera letra del Nombre
var firstLetter = name.charAt(0);
console.log(firstLetter);

// Otra variable que contenga la última letra del Apellido
var lastLetter = familyName.charAt(familyName.length - 1);
console.log(lastLetter);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
var anotherGenericStudent = "     student     ";
console.log(anotherGenericStudent.trim());

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(student.includes(name));