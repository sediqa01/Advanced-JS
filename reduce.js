// Summing an array of numbers:

const num = [0, 1, 2, 3, 4];
let sum = num.reduce((acc, curr) => acc + curr ,0);
//     console.log(
//         "accu: ", acc,
//         "curr:", curr,
//         "Total", acc + curr

//     );

//     return acc + curr;

// },1);
console.log(sum);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  let totalEx = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalEx);
  
  // Grouping by a property, and totaling it too
  let expByProfession = teamMembers.reduce((acc, curr) => {

    let key = curr.profession;
    if(!acc[key]){
        acc[key] = curr.yrsExperience;

    } else{
        acc[key] += curr.yrsExperience;
    }
    return acc;

  }, {});

  console.log(expByProfession);
  
  