'use strict';


angular.module('enexapp').service('OrderService', function ($http) {
    var OrderService = {
        addCashOrder: function (data) {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host2.cashOrder + '/save'
            }).then(function (reponse) {
                return reponse.data;
            });
        },
        updateOrder: function (data) {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host2.cashOrder + '/update'
            }).then(function (reponse) {
                return reponse.data;
            });
        }
    }
    return OrderService;
});
