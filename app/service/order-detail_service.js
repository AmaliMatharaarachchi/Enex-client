'use strict';

angular.module('enexapp').service('OrderDetailService', function ($http) {
    var OrderDetailService = {
        addOrderDetail: function (data) {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host2.orderDetail + '/save'
            }).then(function (reponse) {
                return reponse.data;
            });
        }
    }

    return OrderDetailService;
});
