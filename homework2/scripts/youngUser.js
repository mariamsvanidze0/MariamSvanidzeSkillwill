const users = [ 
    {
        name: 'Temo',
        age: 25,
    },
    {
        name: 'Lasha',
        age: 21,
    },
    {
        name: 'Ana',
        age: 28,
    },
];

function findUser(users) {
  let youngUser = users[0];

  for (let i = 1; i < users.length; i++) {
    if (users[i].age < youngUser.age) {
        youngUser = users[i];
    }
  }
  return youngUser.name;
}
const youngUserName = findUser(users);
console.log(youngUserName);