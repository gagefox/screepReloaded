var controllerCreepsCivilian =  require('./controller.creeps.civilian');
var controllerCreepsMilitary =  require('./controller.creeps.military');

var controllerCreeps = {
    run: function () {
        // Military Creep Logic
        controllerCreepsMilitary.run();

        // Civilian Creep Logic
        controllerCreepsCivilian.run();
    }
};

module.exports = controllerCreeps;