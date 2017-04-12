/**
 * Created by violet on 4/12/17.
 */
"use strict";
function interaction () {

    var name = "";

    do {
        var name = prompt("What is your name? ");

    } while (name === '');

    alert("Welcome " + name );

    var response = confirm('Do you like pizza?');

    (response) ? alert("Awesome! I like pizza too.") : alert("What kind of food do you like?");

    }

interaction();