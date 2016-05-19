/**
 * Created by Himashi Nethinika on 5/13/2016.
 */

module.factory('ProductService', function ($http, $rootScope) {

    var ProductService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        saveProduct: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.product + "/save"
            }).then(function (response) {
                return response.data;
            });
        },
        getAllProducts: function () {
            return $http({
                method: "GET",
                headers: headers,
                url: host2.product + "/getAll"
            }).then(function (response) {
                return response.data;
            });
        }
    }
    return ProductService;
});
