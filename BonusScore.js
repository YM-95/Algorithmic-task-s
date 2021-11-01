function data(input) {

    let [studentNumber, countLecture, firstBonus] = [Number(input.shift(0)), Number(input.shift(1)), Number(input.shift(2))]

    let highest = 0
    let attendancy = 0
    for (let i = 0; i < studentNumber; i++) {
        let studentAtendance = Number(input[i])
        let totalBonus = Math.ceil(studentAtendance / countLecture * (5 + firstBonus))
        if (totalBonus >= highest) {
            highest = totalBonus;
            attendancy = studentAtendance
        }
    }
    console.log(`Max Bonus: ${highest}.`);
    console.log(`The student has attended ${attendancy} lectures.`);
}

data([`5`, `25`, `30`, `12`, `19`, `24`, `16`, `20`])

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////



function solve(input) {
    input = input.map(x => Number(x))
    let students = input.shift()
    let lectures = input.shift()
    let initBonus = input.shift()
    let highestScore = 0;
    let totalBonus = 0;
    for (let i = 0; i < students; i++) {
        let student = input[i];
        if (student <= lectures) {
            if (student > highestScore) {
                highestScore = student;
                totalBonus = Math.ceil(highestScore / lectures * (5 + initBonus))
            }
        }

    }
    console.log(`Max Bonus: ${totalBonus}.`);
    console.log(`The student has attended ${highestScore} lectures.`);
}

solve([`5`, `25`, `30`, `12`, `19`, `24`, `16`, `20`])