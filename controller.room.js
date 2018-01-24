/** Room control logic **/
var controllerRoom = {
    run: function () {
        // civLevel.run()

        // Makes sure memory is clear of dead creeps
        for(let name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
    }
};

module.exports = controllerRoom;