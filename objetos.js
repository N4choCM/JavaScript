const yo = {
    name: "Nacho",
    lastNames: "Campos Martí",
    age: 26,
    height: 1.78,
    developper: true
};
console.log(yo);

var myAge = yo.age;
console.log(myAge);

const friends = [yo, laura={
    name: "Laura",
    lastNames: "Granados López",
    age: 36,
    height: 1.74,
    developper: false
}, javi={
    name: "Javi",
    lastNames: "Iglesias Navarrete",
    age: 32,
    height: 1.80,
    developper: false
}]
console.log(friends);
console.log(yo);
console.log(javi);
console.log(laura);

const ol = friends.sort((a, b) => b.age - a.age);
console.log(ol);