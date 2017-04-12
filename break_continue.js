'use strict';
do {
    var random = Math.floor((Math.random() * 50) + 1);
}while (random % 2 === 0);

    console.log("Your random number is " + random);

for (var i = 1; i <= 50; i += 2) {
    if (i === random){
        console.log("Yikes Skipping Number " + random);
        continue;
    }
    console.log("Here is an odd number: " + i);
}
