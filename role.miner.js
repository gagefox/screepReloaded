//Move these functions to prototype??

//GET POST POS -- CURRENTLY GETTING POS OF NEAREST SOURCE UNTIL WE FIGURE OUT HOW WE DO THIS...
let getPost = function (creep) {
    let sourcePos;
    let sources = creep.room.find(FIND_SOURCES);
    for(let i in sources){
        let source = sources[i];
        if(source.energy === source.energyCapacity){
            sourcePos = source.pos;
            break;
        }
    }
    return sourcePos;
};

//MOVE TO POST - CURRENTLY MOVING NEAR TO ACTIVE SPAWN UNTIL WE FIGURE OUT HOW WE DO THIS...
let moveToPost = function (creep) {
    let creepPos = creep.pos;
    let post = getPost(creep);
    if (!creepPos.isNearTo(post)) {
        creep.moveTo(post);
    }
    else {
        status = 'AtPost';
    }
};

//CALCULATE CARRY SUM
let calcCarrySum = function (creep) {
    let sum = 0;
    for(let item in creep.carry){
        sum += creep.carry[item];
    }
    return sum;
};

//GET INPUT
let getInput = function (creep) {
    let sourceId = creep.pos.findInRange(FIND_SOURCES, 1)[0].id;
    creep.memory.inputId = sourceId;
    return sourceId;
};

//GET OUTPUT
let getOutput = function (creep) {
    let creepPos = creep.pos;
    let containerFilter = {filter: {structureType : STRUCTURE_CONTAINER}};
    let containerId = creepPos.findInRange(FIND_STRUCTURES, 1, containerFilter)[0];
    if(!containerId){
        let siteId = creepPos.lookFor(LOOK_CONSTRUCTION_SITES)[0].id;
        if(!siteId){
            creepPos.createConstructionSite(STRUCTURE_CONTAINER);
        }
        creep.build(siteId);
        return;
    }
    creep.memory.outputId = containerId;
    return containerId
};


//OPERATE THE MINER
let miner = function(creep){
    let memory = creep.memory;              //MEMORY SHORTCUT
    let status = memory.status || 'Ready';  //STATUS SHORTCUT

    //IF CREEP IS AT LOCATION TO MINE:
    if(status === 'AtPost'){
        let carrySum = calcCarrySum(creep);
        let capacity = creep.carryCapacity;
        let input = Game.getObjectById(memory.inputId || getInput(creep));
        let output = Game.getObjectById(memory.outputId || getOutput(creep));

        creep.harvest(input);
        if(carrySum === capacity){
            creep.transfer(output, RESOURCE_ENERGY);
        }
    }
    //IF CREEP IS NOT AT LOCATION TO MINE:
    else{
        moveToPost(creep);
    }
};

module.exports = miner;