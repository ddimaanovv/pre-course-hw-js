let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passport_new = {...passport}
passport_new.name = "Ivan"
console.log(passport);
console.log(passport_new);