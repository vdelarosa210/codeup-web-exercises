/**
 * Created by violet on 4/14/17.
 */
(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var area = (Math.PI * (Math.pow(this.radius, 2)));

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            if (doRounding) {
                var rnd = Math.round(circle.getArea())

            } else {
                var rnd = circle.getArea()
            }


            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + rnd);
        }
    }

    // console.log(circle.getArea());


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();