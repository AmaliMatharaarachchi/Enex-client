'use strict';

angular.module('enexapp').service('customerService', function ($http) {
    var customerService = {
        getAllCustomers: function () {
                return $http({
                method: "GET",
                headers: headers,
                url: host.companyCustomer + '/getAll'
            }).then(function (reponse) {
                return reponse.data;
            });
        }
    }

    return customerService;
});
