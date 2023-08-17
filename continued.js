//Section 9

const data = [10, 20, 30, 40, 50]

//write a function that doubles each element of the array and return a new array with double values
const doubler = (array) =>{
    const doubledArray = array.map(number => number * 2);
        return doubledArray;
}

const doubledResult = doubler(data);
console.log(doubledResult);


//Section 10
const values = [34, 12, 78, 53, 90];
//that finds and returns the max value in the array

const highestNumberFinder = (array) =>{
        let highestNumber = array[0]
        for(i = 0; i < array.length; i++){
            if(array[i] > highestNumber){
                 highestNumber = array[i] ;
            }
        }
        return highestNumber
}

const highestNumberResult = highestNumberFinder(values);
console.log(highestNumberResult);







//Sections OBJECTS
let movie = {

    name: "Titanic",

    releaseYear: 1997,

    director: "James Cameron",

    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates" ],

    starActor: {

        name: "Leonardo Dicaprio",

        age: 5,

        born: 1889,

        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",

        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"

    },

    budgetInMillions: 200

}
//1
movie.age = 48;
//2
movie.starActor.born = 1989;
//3
movie.starActor.isPopular = true;
//4
movie.isGoodMovie = undefined;
//5
for(i = 0; i < movie.actors.length; i++){
    if(movie.actors[i] == "Tom Cruise"){
        movie.isGoodMovie = true;
    }
    else{
        movie.isGoodMovie = false;
    }
}
console.log(movie.isGoodMovie);

//2nd problem

let cohortFour = {
    classSize: 5,
    instructor: {
        name: "Fred",
        age: 40,
        completedCohortIds: [3, 77, 45, 23],
        email: "fred@fred.com",
        assistant: {
            name: "Brad",
            age: 38,
            email: "Brad@brad.com"
        }
    },
    classGrades: [99, 100, 89, 88, 95]
};

//1 
if(cohortFour.classSize > 10){
    console.log("Class is bigger than 10")
}
else{
    console.log(`Class is smaller than 10 and has` , cohortFour.classSize , `students.` )
}

//2 
let highestClassId = 0;
for(i = 0; i <cohortFour.instructor.completedCohortIds.length; i++){
    let currentCohortId = cohortFour.instructor.completedCohortIds[i];
    if(currentCohortId > highestClassId && cohortFour.instructor.completedCohortIds[i] > 2){
        highestClassId = currentCohortId;
    }
}
 console.log(`The instructor has completed more than 2 cohorts and highest ID is ` , highestClassId )

 //3
cohortFour.instructor.newAssistant = {
    name : "Akshat",
    age : 12,
    email : "Akshatrait@gmail.com"
}
// console.log(cohortFour)
 
 const changeAssistant = () =>{
    if (
        cohortFour.instructor.assistant.name !== cohortFour.instructor.newAssistant.name || cohortFour.instructor.assistant.age !== cohortFour.instructor.newAssistant.age || cohortFour.instructor.assistant.email !== cohortFour.instructor.newAssistant.email
        ) 
        {
            cohortFour.instructor.assistant = {
            ...cohortFour.instructor.newAssistant}
        return true;
    }
    else{
        return false;
    }
 }
//4
let checkFred;
function checkingFred(){
for(i = 0; i < cohortFour.instructor.completedCohortIds.length; i++){
    checkFred = false;
    if(cohortFour.instructor.completedCohortIds.length[i] === "Fred"){
        checkFred = true;
        return checkFred , `Fred completed cohort 55`
    }else{
        return `Fred didn't complete cohort 55`
    }
}
}
//5

let sum = 0;
const averageGradeCalculator = () =>{

for(i = 0; i < cohortFour.classGrades.length; i++){
    sum += cohortFour.classGrades[i]; 
}

let calculateAverage = sum / cohortFour.classGrades.length;
return calculateAverage;
}
 const classGradeAverage = averageGradeCalculator()
 console.log(classGradeAverage);