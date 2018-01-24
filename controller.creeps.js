var controllerCreepsCivilian =  require('./controller.creeps.civilian');
var controllerCreepsMilitary =  require('./controller.creeps.military');
var controllerSpawnLogic = require('./controller.creeps.spawner');

var controllerCreeps = {
    run: function () {
        // Runs Creeps Spawner Logic
        controllerSpawnLogic.run();

        // Military Creep Logic
        //todo create military creep logic
        //controllerCreepsMilitary.run();

        // Civilian Creep Logic
        //todo create civilian creep logic
        controllerCreepsCivilian.run();
    }
};

module.exports = controllerCreeps;