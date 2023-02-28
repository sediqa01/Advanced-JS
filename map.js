// for lop

let nums = [2, 3, 4, 5, 6, 7];
let result = [];

for (let num of nums){
    result.push(num * 2);
}
console.log("for loop",result);

console.log("---------------------");

//  map()
const multiplyTwo = function(num) {
    return num * 2;
}
const mapResult = nums.map(multiplyTwo);
console.log("Map",mapResult);

// simplified with arrow
console.log("--------------------");


const mapArrow = nums.map(num => num * 2);
console.log("Arrow Map",mapArrow);

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
  
  const studentMap  = students.map(student => [student.id, student.name]);
  console.log("Student Map",studentMap);