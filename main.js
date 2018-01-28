// Includes
var controllerBuilding =  require('./controller.buildings');
var controllerRoom =  require('./controller.room');
var controllerCreeps = require('./controller.creeps');

// Main loop
module.exports.loop = function () {
    // Room Logic
    controllerRoom.run();

    // Building Logic
    //todo create building logic
    //controllerBuilding.run();

    // Creep Logic
    controllerCreeps.run();
    
    

}

