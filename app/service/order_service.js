/**
 * Created by Kavindya on 5/14/2016.
 */


module.factory('OrderService', function ($http, $rootScope) {

    var OrderService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        viewOrder: function (data) {
            // return $http({
            //     method: "POST",
            //     headers: headers,
            //     data: data,
            //     url: host2.product + "/save"
            // }).then(function (response) {
            //     return response.data;
            // });
        }
    }
    return OrderService;
});