/**
 * Created by Himashi Nethinika 5/08/2016.
 */

module.factory('UserService', function ($http, $rootScope) {

    var UserService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        saveUser: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.user + "/save"
            }).then(function (response) {
                return response.data;
            });
        },
        getAllSalesRepresentative:function (data) {
            return $http({
                method: "GET",
                headers: headers,
                url: host2.user + "/getAll"
            }).then(function (response) {
                return response.data;
            });
        }
    }
    return UserService;
});
