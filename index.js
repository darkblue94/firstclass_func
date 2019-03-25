// Functions Returning Functions//

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ' , can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach?');
        }
    } else if (job === 'rockstar') {
        return function (name) {
            console.log(name + ', what instrument do you play?');
        }
    } else {
        return function (name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}
//here we are putting the interviewQuestion into a variable, to invoke it much easier.
var teacherQuestion = interviewQuestion('teacher');
//here we are invoking the teacherQuestion function, inputting juan.
teacherQuestion('Juan');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Sara');

//here we are invoking the interviewQuestion function , and its returning function in one line.

interviewQuestion('teacher')('Mauricio');
interviewQuestion('rockstar')('Elio');


function surveyQuestions(age) {
    if (age > 18 && age < 25) {
        return function (gender) {
            if (gender === 'male') {
                console.log('would you like to save 30% on Monster Energy Drinks?');
            } else if (gender === 'female') {
                console.log('would you like to save 20% on Sephora Make Up Products?');
            } else {
                console.log('Would you like to save 20% on all your favorite products?');
            }
        }
    } else if (age > 25 && age < 50) {
        return function (gender) {
            if (gender === 'male') {
                console.log("Let us save you 45% Mens Apparel!");
            }
            else if (gender === 'female') {
                console.log("Let us save you 30% on Womens Perfume and Handbags!");
            }
            else {
                console.log("Let us save you 50% on your next vacation!");
            }
        }
    }
}
surveyQuestions('19')('male');
surveyQuestions('26')('female');
surveyQuestions('45')('N/A');