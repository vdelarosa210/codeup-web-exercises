/**
 * Created by violet on 4/10/17.
 */


var luckyNumber = Math.floor(Math.random()* 6);


var amountPaid = 60.00;

//var luckyNumber =1;

var discountReceive = 0.00;
    console.log(luckyNumber);
luckyNumber =1;

switch (luckyNumber) {
    case 1:
        console.log("You're receiving a 10% discount");
        discountReceive = receipt * .10;
        receipt = receipt - discountReceive;
        break;


    case 2:
        console.log("You're receiving a 25% discount");
        discountReceive = receipt * .25;
        receipt = receipt - discountReceive;
        break;

    case 4:
        console.log("You're receiving a 50% discount");
        discountReceive = receipt * .50;
        receipt = receipt - discountReceive;
        break;

    case 5:
        console.log("You're receiving it for free!");
        discountReceive = receipt * .100;
        receipt = 0;
        break;
    default:
        console.log("You did not get a discount :");
}

console.log("receipt: $: + receipt.toFixed(2)")


//Now, suppose there's a promotion in Walmart, If your lucky number is 0 you have no discount,
// if your lucky number is 1 you'll get a 10% discount,
    // if it's 2, discount is 25%, if it's 4, 50%,
    // and if it's 5 you'll get all for free!.
// Write a JS program that logs to the console,
    // how much you will have to pay if your receipt is for $60.
// Every time you reload your page you should see a different result.
// Use a switch statement for this exercise.



