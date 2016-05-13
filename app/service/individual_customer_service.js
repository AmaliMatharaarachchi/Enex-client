/**
 * Created by Himashi Nethinika 5/08/2016.
 */

module.factory('IndividualCustomerService', function ($http, $rootScope) {

    var IndividualCustomerService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        saveCustomer: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.individualCustomer + "/save"
            }).then(function (response) {
                return response.data;
            });
        },
        getAllCustomers:function (data) {
            return $http({
                method: "GET",
                headers: headers,
                data: data,
                url: host2.individualCustomer + "/getAll"
            }).then(function (response) {
                return response.data;
            });
        }
    }
        return IndividualCustomerService;
});
