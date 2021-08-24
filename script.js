//task 1

let toy  = {
    name: "doll",
    color:  "yellow",
    age: 3
};

toy.name = "emma";
delete toy.name;


//task 2

let week = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
    7: "sunday"
};

console.log('current day:', week[2]);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let day = getRandomIntInclusive(1, 7);

console.log('random day', week[day]);

//task 3

let person = {
    name: {
        ru: "Shamyakin Ivan Petrovich",
    },
    bio: [
        {
            year: 1921,
            description: "born into a peasant family",
            place: "the village of Korma, Gomel district",
        },
        {
            year: 1936,
            description: "start of studies",
            place: "Gomel"
        }
    ],
    biblio: [
        {
            year: 1949,
            work: "Deep flow",
        },
        {
            year: 1964,
            work: "Heart in the palm",
        }
    ]
};

console.log('name:', person.name.ru, 'year:', person.bio[0].year, 'place:', person.bio[0].place, 'biblio', person.biblio[1]);


//task 4

let person4 =
    {name: 'Peter', age: 13};

let arr = Object.entries(person4);
console.log(arr[0][0],':', arr[0][1], arr[1][0],':', arr[1][1]);

//task 5

let people = {
	Masha: 15,
    Sasha: 13,
    Peter: 16,
    Dasha: 10
};

let maxAge = 0;

for( let key in people){
    console.log(people[key]);
    if(people[key] > maxAge){
        maxAge = people[key];
    }
}
console.log(maxAge);


// const ages = Object.values(people);
// if(ages.length === 0){
//     console.log("object is empty");
// }
// const maxAge1 = Math.max(...ages);
//
// console.log(maxAge1);