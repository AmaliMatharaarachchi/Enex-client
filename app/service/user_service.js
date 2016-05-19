/**
 * Created by Himashi Nethinika 5/08/2016.
 */

module.factory('UserService', function ($http, $rootScope) {

    var UserService = {
        login: function (user) {
            return $http({
                method: "POST",
                headers: headers,
                data: user,
                url: host2.user + "/checkUser"
            }).then(function (response) {
                return response.data;
            });
        },
        getCurrentUser: function (userId) {
            return $http({
                method: "GET",
                headers: headers,
                url: host2.user + "/getUserById?userId=" + userId
            }).then(function (response) {
                return response.data;
            });
        },
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
        getAllSalesRepresentative: function (data) {
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
