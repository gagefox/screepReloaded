/** Military Creeps control logic **/

// Includes
var roleHarvester = require('./roles/role.harvester');
var roleUpgrader = require('./roles/role.upgrader');
var roleBuilder = require('./roles/role.builder');

var controllerCreepsMilitary = {
    run: function () {
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
        }
    }
};

module.exports = controllerCreepsMilitary;