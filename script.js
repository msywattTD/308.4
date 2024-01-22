// This is the base data from previos lab

// CSV Data we are working with
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Variables created to hold cell data and placeholders
// let placeholder = '';
// let cell1 = '';
// let cell2 = '';
// let cell3 = '';
// let cell4 = '';

// // Loop for each character
// for (char of str) {
//     //Switch case to determin what to do with each char
//   switch (char) {
//     case ',':
//       if (!cell1) {
//         cell1 = placeholder;
//         placeholder = '';
//         break;
//       } else if (!cell2) {
//         cell2 = placeholder;
//         placeholder = '';
//         break;
//       } else {
//         cell3 = placeholder;
//         placeholder = '';
//         break;
//       }
//     case '\n':
//       cell4 = placeholder;
//       placeholder = '';
//       console.log(cell1, cell2, cell3, cell4);
//       cell1 = '';
//       cell2 = '';
//       cell3 = '';
//       cell4 = '';
//       break;
//     default:
//       placeholder += char;
//   }
// }

//-------------------------------PART 2
// let myArr = str.split('\n');

// let columns = 1;

// for (let i = 0; i < str.indexOf('\n'); i++) {
//     if (str[i] == ',') {
//         columns +=1;
//     }
// }

// let doubleArr = [];
// for (element in myArr) {
//     doubleArr.push(myArr[element].split(','));   
// }


// console.log(doubleArr)


//-------------------------------PART 3
let myArr = str.split('\n');

let columns = 1;

for (let i = 0; i < str.indexOf('\n'); i++) {
    if (str[i] == ',') {
        columns +=1;
    }
}



let doubleArr = [];
for (element in myArr) {
    doubleArr.push(myArr[element].split(','));   
}


// console.log(doubleArr[1][0])

let persons = []

for (i = 1; i < doubleArr.length; i++){
    let person = {};
    for (trait in doubleArr[0]){
    person[doubleArr[0][trait].toLowerCase()] = doubleArr[i][trait]
    }
    persons.push(person)
}

// console.log(persons)

//-------------------------------PART 4
persons.pop()

// console.log(persons)

persons.push(
    {
        id: "7",
        name: "Bilbo",
        occupation: "None",
        age: "111"
    }
)

// console.log(persons)

let runningAge = 0;
let ageSum = 0;
for (let i=0; i<persons.length;i++) {
    runningAge += parseInt(persons[i].age);
    ageSum = runningAge/persons.length

}

//console.log(ageSum)

//-------------------------------PART 5

let tempArr = [];
for (let i = 0; i<persons.length; i++){
        tempArr.push(persons[i].id)
        tempArr.push(persons[i].name)
        tempArr.push(persons[i].occupation)
        tempArr.push(persons[i].age)
        tempArr.push(`\n`)
}

//this is scuffed and has extra commas
let newCSV = tempArr.join(',')
console.log(newCSV)



//pART 3 ALSO FUCNTIONING BUT WEIRD APPARENTLY ((IGNORE))

// let myArr = str.split('\n');
// let title = str.slice(0, str.indexOf('\n'));
// let noTitle = str.slice(str.indexOf('\n')+1);

// title.toLowerCase();
// let arrKey = title.split(',');
// let columns = 1;

// for (let i = 0; i < str.indexOf('\n'); i++) {
//     if (str[i] == ',') {
//         columns +=1;
//     }
// }



// let doubleArr = [];
// for (element in myArr) {
//     doubleArr.push(myArr[element].split(','));   
// }

// let persons = []

// for (i = 0; i < doubleArr.length; i++){
//     let person = {};
//     for (trait in arrKey){
//     person[arrKey[trait]] = doubleArr[i][trait]
//     }
//     persons.push(person)
// }

// console.log(persons)

//--------------------------------------------------
// let title = str.slice(0, str.indexOf('\n'));
// let noTitle = str.slice(str.indexOf('\n')+1);

// let myArr = noTitle.split('\n');

// let columns = 1;

// for (let i = 0; i < str.indexOf('\n'); i++) {
//     if (str[i] == ',') {
//         columns +=1;
//     }
// }
// title = title.toLowerCase();
// let arrKey = title.split(',');
// let rows = 0;
// let doubleArr = [];
// for (element in myArr) {
//     doubleArr.push(myArr[element].split(','));   
// }
// // console.log(doubleArr)

// let persons = []

// for (let i = 0; i < doubleArr.length; i++) { //each row in doubleArr is a person and their info
//     let entry = {}
//     for (let j = 0; j < i.length; j++) {
//         console.log(j)
//         entry[arrKey[j]] = doubleArr[i[j]]
//     }
//     // for (let trait in person) { //each value in person is a trait
//     //     entry[arrKey[trait]] = doubleArr[person[trait]]
//     //     console.log(trait)
//     // }
//     // let person {
//     //     arrKey[element]:element[]
//     // }
//     persons.push(entry)
// }

// console.log(persons)
