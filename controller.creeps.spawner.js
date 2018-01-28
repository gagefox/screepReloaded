var controllerSpawnLogic = {
    run: function() {
        var civLevel = 0;
        var maxHarvesters;
        var maxUpgraders;
        var maxBuilders;

        //Changes what is spawning per room
        switch(civLevel) {
            // Beginning of the game
            // This will just spawn harvesters, upgraders and builders
            case 0:
                maxHarvesters = 3;
                maxUpgraders = 6;
                maxBuilders = 3;
                break;

            // civLevel 1
            // will remove the need for harvesters and move to the smallMiner and Hauler setup
            case 1:
                break;

            // civLevel 2
            // upgrades to bigMiners
            case 2:
                break;
        }

        // This logic finds how many creeps are currently in the game
        var currentHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var currentUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var currentBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        // This is the logic to actually spawn the creeps
        //todo create logic for piroity type spawning

        var spawn;

        for(let name in Game.spawns){
            spawn = Game.spawns[name];
            break;
        }

        if(currentHarvesters.length < maxHarvesters) {
            spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        }

        else if (currentUpgraders.length < maxUpgraders) {
            spawn.createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
        }

        else if (currentBuilders.length < maxBuilders) {
            spawn.createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
        }
    }
};

module.exports = controllerSpawnLogic;