﻿(function (r) {
    "use strict";

    var modules = {
        helper: r('../helpers'),
        data: r('../data'),
        room: r('../Rooms/roomFunctions'),
        playerSetup: {
            player: r('../PlayerSetup/player-manager')
        },
        commands: r('../commands'),
        events: {
            enterRoom: r('./enterRoom')
        },
        loadPlayerLocation: r('../loadRoom'),
        world: {
            valston: r('../../World/valston/prison')
        },
    };

    var enterRoom = function (player, direction, status, playersInRoom) {
        console.log("enter ROmm called")

            var name = player.getName();
            var socket = player.getSocket();

        console.log(name)

            var pace = 'walk'; //TODO: fix walk and walks
            var dir = direction || 'load'; // prev location
          
            var enterMessageSelf = {
                load: 'You have appeared',
                enter: 'You' + ' ' + pace + ' in from the ' + dir,
                leave: 'You' + ' ' + pace + ' ' + dir
            };

            var enterMessageOther = {
                load: name + ' has appeared',
                enter: name + ' ' + pace + ' in from the ' + dir,
                leave: name + ' ' + pace + ' ' + dir
            };
       
            console.log('enter room playersInRoom' + playersInRoom.length)
        if (playersInRoom.length > 0) {


            playersInRoom.forEach(function(playersInRoom) {

                var playerName = playersInRoom.getName();

                if (name !== playerName) {

                    var playersSocket = playersInRoom.getSocket();

                    console.log(enterMessageOther[status])

                    console.log("playerSocketInRoom " + playersSocket)

                    if (playersSocket != null) {
                        modules.helper.helpers.send(playersSocket, enterMessageOther[status]);
                    }


                } else {
                    console.log('enter room e;se')
                    console.log("status " + enterMessageSelf[status])
                    modules.helper.helpers.send(socket, enterMessageSelf[status]);


                }
            });
        } else {
            console.log('enter room e;se')
            console.log("status " + enterMessageSelf[status])
            modules.helper.helpers.send(socket, enterMessageSelf[status]);
        }

 

        }
    exports.enterRoom = enterRoom;
})(require);