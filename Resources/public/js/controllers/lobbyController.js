'use strict';

frontendApp.controller(
        'lobbyController', 
        [
            '$scope', 'lobbyService', 
            function lobbyController($scope, lobbyService) {
                $scope.lobbys = {};

                $scope.getRoomsList = function()
                {
                    lobbyService.getLobbyList()
                    .then(
                        function(response){
                                $scope.lobbys = response;
                        }
                    );
                }

                $scope.getRoomsList();
            }
        ]
);