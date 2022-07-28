const today = new Date();
console.log(today);

const myBirthday = new Date (1996, 4, 8);
console.log(myBirthday);

const todayLater = today > myBirthday;
console.log(todayLater);

const myBirthdayDate = myBirthday.getDate();
console.log(myBirthdayDate);

const myBirthdayMonth = myBirthday.getMonth();
console.log(myBirthdayMonth);

const myBirthdayYear = myBirthday.getFullYear();
console.log(myBirthdayYear);