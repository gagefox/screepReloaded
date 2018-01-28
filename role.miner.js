//Move these functions to prototype??

//GET POST POS
let getPost = function (creep) {
    let x;
    let y;
    let roomName;
    return new RoomPosition(x,y,room);

    let sourcePos;
    let sources = creep.room.find(FIND_SOURCES_ACTIVE)
    for(let i in sources){
        let source = sources[i];
        if(source.energy === source.energyCapacity){
            sourcePos = source.pos;
            break;
        }
    }
    return sourcePos;
}

//MOVE TO POST
let moveToPost = function (creep) {
    let creepPos = creep.pos;
    let post = getPost(creep);
    if (!creepPos.isNearTo(post)) {
        creep.moveTo(post);
    }
    else {
        status = 'AtPost';
    }
}

//CALCULATE CARRY SUM
let calcCarrySum = function (creep) {
    let sum = 0;
    for(let item in creep.carry){
        sum += creep.carry[item];
    }
    return sum;
}

//GET INPUT
let getInput = function (creep) {

}

//GET OUTPUT
let getOutput = function (creep) {
    
}


//OPERATE THE MINER
var miner = function(creep){
    let memory = creep.memory;              //MEMORY SHORTCUT
    let status = memory.status || 'Ready';  //STATUS SHORTCUT

    //IF CREEP IS AT LOCATION TO MINE:
    if(status === 'AtPost'){
        let carrySum = calcCarrySum(creep);
        let capacity = creep.carryCapacity;
        let input = Game.getObjectById(memory.inputId || creep.getInput(creep));
        let output = Game.getObjectById(memory.outputId || creep.getOutput(creep));

    }

    //IF CREEP IS NOT AT LOCATION TO MINE:
    else{
        creep.moveToPost(creep);
    }
}


module.exports = miner;