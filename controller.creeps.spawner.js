//THIS IS PURE COPY PASTE FROM OLD CODE NEED TO UPDATE

var controllerSpawnLogic = {
    run: function() {
        var civLevel = 0;
        var maxHarvesters;
        var maxUpgraders;
        var maxBuilders;
        var maxsmallMiners;
        var maxbigMiners;

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
                maxHarvesters = 0;
                maxUpgraders = 6;
                maxBuilders = 3;

                var sources = Game.room.find(FIND_SOURCES);
                var maxSmallMiners = sources.length;
                break;

            // civLevel 2
            // upgrades to bigMiners
            case 2:
                break;
        }

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var smallMiners = _.filter(Game.creeps, (creep) => creep.memory.role == 'smallMiner');
        //var bigMiners = _.filter(Game.creeps, (creep) => creep.memory.role == 'bigMiner');
        //var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');

        //Spawning Logic

        if(harvesters.length < maxHarvesters) {
            Game.spawns['NewEden'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        }

        else if (upgraders.length < maxUpgraders) {
            Game.spawns['NewEden'].createCreep([WORK,WORK,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
        }

        else if (builders.length < maxBuilders) {
            Game.spawns['NewEden'].createCreep([WORK,WORK,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'builder'});
        }

        else if (smallMiners.length < maxSmallMiners) {
            Game.spawns['NewEden'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'smallMiner'});
        }
    }
};

module.exports = controllerSpawnLogic;