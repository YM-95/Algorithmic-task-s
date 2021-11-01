// function solve(arr) {

//     let stamina = Number(arr.shift())
//     let wins = 0
//     for (let i = 0; i <= arr.length; i++) {
//         let tokens = arr[i];

//         if (tokens == "End of battle") {
//             console.log(`Won battles: ${wins}. Energy left: ${stamina}`);
//             break;
//         }
//         if (stamina < Number(tokens)) {
//             console.log(`Not enough energy! Game ends with ${wins} won battles and ${stamina} energy`);
//             break;
//         }
//         stamina = stamina - Number(tokens)
//         wins++
//         if (wins % 3 === 0) {
//             stamina += wins
//         }
//     }
// }

// solve(["100", "10", "10", "10", "1", "2", "3", "73", "10"])
// // solve(["200", "54", "14", "28", "13", "End of battle"])



let str = 'yordan'

console.log(str.length);