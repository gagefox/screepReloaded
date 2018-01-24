// Includes
var controllerBuilding =  require('./controllers/controller.buildings');
var controllerRoom =  require('./controllers/controller.room');
var controllerCreeps = require('./controllers/controller.creeps')


// Main loop
module.exports.loop = function () {
    // Room Logic
    controllerRoom.run();

    // Building Logic
    controllerBuilding.run();

    // Creep Logic
    controllerCreeps.run();
}

