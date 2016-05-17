'use strict';


angular.module('enexapp').service('userService', function ($http) {
        var userService = {
            addUser: function (data) {
                return $http({
                    method: "POST",
                    data: data,
                    headers: headers,
                    url: host.user + '/save'
                }).then(function (reponse) {
                    return reponse.data;
                });
            }
        }

        return userService;
    });
