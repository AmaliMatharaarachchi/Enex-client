/**
 * Created by Amali Lakshika on 5/18/2016.
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
        }
    }
    return ProductService;
});
