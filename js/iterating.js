/**
 * Created by violet on 4/12/17.
 */
(function(){
    "use strict";

    var names = ['Tom', 'Jerry', 'Bugs', 'Bunny'];



    // console.log('There are ' + names.length + ' names in the array');

    // console.log('The first name is: ' + names [0]);
    //
    // console.log('The second name is: ' + names [1]);
    //
    // console.log('The third name is: ' + names [2]);
    //
    // console.log('The fourth name is: ' + names [3]);
    //
    // console.log('');
    //
    // console.log('For Loop:');

    // for (var i = 0; i < names.length; ++i) {
    //     console.log(names[i]);
    // }

    names.forEach(function(element, index) {
        console.log('The name at index ' + index + ' is: ' + element);
    })
})();



// TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

// TODO: Create a log statement that will log the number of elements in the names array.

// TODO: Create log statements that will print each of the names array elements individually.