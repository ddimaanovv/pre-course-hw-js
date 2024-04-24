let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddress_new = structuredClone(passportWithAddress)
passportWithAddress_new.address.city = "Bobryisk"
console.log(passportWithAddress);
console.log(passportWithAddress_new);