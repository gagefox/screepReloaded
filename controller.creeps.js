var controllerCreepsCivilian =  require('./controller.creeps.civilian');
var controllerCreepsMilitary =  require('./controller.creeps.military');
var controllerSpawnLogic = require('./controller.creeps.spawner');

var controllerCreeps = {
    run: function () {
        // Runs Creeps Spawner Logic
        controllerSpawnLogic.run();

        // Military Creep Logic
        controllerCreepsMilitary.run();

        // Civilian Creep Logic
        controllerCreepsCivilian.run();
    }
};

module.exports = controllerCreeps;