let usersData = [
    {
        name: 'Lasha',
        age: 30
    } ,
    {
        name: 'Saba',
        age: 20
    }, {
        name: 'Elene',
        age: 15
    },
    {
        name: 'Nino',
        age: 45
    },
    {
        name: 'Elene',
        age: 32
    }
]

function correctAge (usersData){
   let sortedUsersData = usersData.sort((a, b) => a.age - b.age);
   return  sortedUsersData;
}

console.log(correctAge(usersData))