// შექმენით მარტივი პროგრამა რომელიც ცვლადში შენახული ციფრის ანუ თქვენი ასაკის მიხედვით    ითვლის ხართ თუ არა სრულწლოვანი და თუ არა მაშინ რამდენი წელიწადი გაკლიათ.

let age = prompt("Please enter your age:");

age = Number(age);

function checkAge(age) {
    if (age >= 18) {
        console.log("You are adult.");
    } else {
        let yearsLeft = 18 - age;
        console.log(`You are not an adult. You have ${yearsLeft} Years left.`);
    }
}

checkAge(age);