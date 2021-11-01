function solve(input) {

    let room = input.split(`|`)
    let heal = 100;
    let bitcoins = 0
    for (let i = 0; i < room.length; i++) {

        let boss = room[i]
        let splitet = boss.split(" ")
        let bossName = splitet[0]
        let number = Number(splitet[1])

        if (bossName != 'potion' && bossName != 'chest') {
            heal = heal - number
        }

        if (bossName == 'potion') {
            heal = heal + number
            if (heal > 100) {
                number = 100 - (heal - number);
                heal = 100;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${heal} hp.`);
        }


        if (bossName == 'chest') {
            console.log(`You found ${number} bitcoins.`);
            bitcoins += number
        }

        if (heal > 0 && bossName != 'potion' && bossName != 'chest') {
            console.log(`You slayed ${bossName}.`);
        } else if (heal <= 0) {
            console.log(`You died! Killed by ${bossName}.`);
            i++
            console.log(`Best room: ${i}`);
            break;
        }
    }
    if (heal > 0) {
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${heal}`)
    }

}


solve(`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`)

// solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')