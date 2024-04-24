let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passport_new = {...passport}
passport_new.name = "Ivan"
console.log(passport.name);
console.log(passport_new.name);