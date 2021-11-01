function multiply(arr) {

  let username = arr.shift(); // Взима първият елемент от списъка, който подаваме, и го присвоява на променливата. Трие съответния елемент от листа!
  let passwordAsList = username.split(``);// раздробява думата на отделни букви. (``) ги държи  една до друга, но отделени със запетая.
  let passwordAsListReversed = passwordAsList.reverse();//обръща огледално реда на буквите в думата, отделени със запетая.
  let password = passwordAsListReversed.join(``);//Събира буквите в думата като ги долепя, премахвайки запетаята.

  for (let i = 0; i <= 3; i++) {
    if (arr[i] === password) {
      console.log(`User ${username} logged in.`);
      return;
    }

    if (arr[i] != password) {
      if (i === 3 && (arr[i] != password)) {
        console.log(`User ${username} blocked!`);
        return;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}

multiply(['Acer', 'login', 'go', ' let me in', 'recA'])





