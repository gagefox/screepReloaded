//Move these functions to prototype??

//MOVE TO POST
let moveToPost = function (creep) {


}

//GET POST POS
let getPost = function (creep) {
    let x;
    let y;
    let roomName;
    return new RoomPosition(x,y,room);
}

//CALCULATE CARRY SUM
let calcCarrySum = function (creep) {
    let sum = 0;
    for(let item in creep.carry){
        sum += creep.carry[item];
    }
    return sum;
}

var miner = function(creep){
    let status = creep.memory.status || 'Ready';
    if(status === 'AtPost'){

    }
    if(status === 'Ready'){
        let post = getPost(creep);
        let creepPos = creep.pos;
        if(creepPos !== post){
            moveToPost(creep);
        }
        else{
            status = 'AtPost';
        }
    }

    let carrySum = calcCarrySum(creep);
}



module.exports = miner;