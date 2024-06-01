const user = {
    firstName: 'Mariam',
    lastName: 'Svanidze',
    banks: {
        bankName: 'RandomData',
        adress: {
            city: 'Tbilisi',
            Street: 'Iosebidze'
        }
    }
}

function userData({banks:{adress:{city} = {}}}) {
    return city;
}
console.log(userData(user));