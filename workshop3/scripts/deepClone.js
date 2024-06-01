{
    const user = {
    firstName: 'Mariam',
    lastName: 'Svanidze',
    banks: {
        bankName: 'RandomData',
        address: {
            city: 'Tbilisi',
            street: 'Iosebidze' 
        }
    }
};

function deepClone(user) {
    return userCopy = {
        ...user,
        banks: {
            ...user.banks,
            address: { 
                ...user.banks.address 
            }
        }
    };
}

console.log(deepClone(user));
}


