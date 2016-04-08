'use strict';

frontendApp.service('lobbyService', function($http, $rootScope){
    var me = this;

    me.lobbysLoaded = function(data)
    {
        $rootScope.$broadcast('lobbysLoaded', data);
    }

    me.getLobbyList = function()
    {
        return $http.post('/getLobbyList').then(function(response){
            if (response.data.error) {
                console.error('Error:', response.data.error);
                return [];
            } else {
                me.lobbysLoaded(response.data);
                return response.data;
            }
        });
    }

});