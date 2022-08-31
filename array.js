var frinedAge = [15, 18, 14, 12,];

var sojonAge = frinedAge [2];

frinedAge[1] = 21;

console.log(frinedAge)

frinedAge.push(17);

frinedAge.push(20);

console.log(frinedAge)

frinedAge.pop();

console.log(frinedAge)


var teaLine = ['kalam', 'Balam', 'Salam',];
teaLine.shift();
console.log(teaLine)

var teaLine = ['kalam', 'Balam', 'Salam',];
teaLine.unshift('jalam');
console.log(teaLine)


var teaLine = ['palam', 'kalam', 'Balam', 'Salam', 'Talam', 'jalam'];
var pate =teaLine.slice(2, 5);
console.log(pate)
console.log(teaLine)
