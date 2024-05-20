const user = {
    firstName: 'Mariam',
    lastName: 'Svanidze',
    age: 25,
    status: 'Student'
}
function cloneUser(user) {
    return { ...user};
}
const clonedUser = cloneUser(user);
console.log(user);
console.log(clonedUser);


