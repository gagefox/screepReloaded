// Includes
var controllerBuilding =  require('./controller.buildings');
var controllerRoom =  require('./controller.room');
var controllerCreeps = require('./controller.creeps');

// Main loop
module.exports.loop = function () {
    // Room Logic
    controllerRoom.run();

    // Building Logic
    controllerBuilding.run();

    // Creep Logic
    controllerCreeps.run();

    //NIKO'S RANDOM SHITTY CODE THAT WILL FUCK EVERYTHING UP COZ HE FORGOT ANOTHER =
    // MORE CHANGES YAY SIGH
    // why is this stuff still here, I updated ...
    // MORE RANDOM UPDATES TO DELETEASDFASDF
}

