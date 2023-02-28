//array
let ages = [22, 23, 29];

let [Hadid, sediqa, Farhat] = ages;
console.log(Hadid, sediqa, Farhat);

// obj
let jobs = {
    Sediqa: "Software Engineer",
    Ferdi: "Finice Manager",
    Saida: "Tech Sourcer",
};

let { Sediqa, Ferdi, Saida } = jobs;
console.log(Sediqa, Ferdi, Saida);

// subset

let languages = ["persion", "english", "German", "Dari", "spanish", "frinch"];
let [sediqaNative, sediqaSpecks, sediqaSecondary] = languages;
console.log(sediqaNative, sediqaSpecks, sediqaSecondary);

let [, , ferdiNative, ferdiSecondary] = languages;
console.log(ferdiNative, ferdiSecondary);

// rest
let favFood = {
    Faroo: "Cheeps",
    Tamana: "Ashak",
    Maryam: "Pasta",
    saida: "Pizza",
};

let {Faroo, Tamana, ...rest} = favFood;
console.log(Faroo);
console.log(Tamana);
console.log(rest);

