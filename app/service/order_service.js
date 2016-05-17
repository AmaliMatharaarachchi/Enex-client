'use strict';

angular.module('enexapp').service('orderService', function ($http) {
    var orderService = {
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

    return orderService;
});
