/**
 * Created by Himashi Nethinika 5/08/2016.
 */

module.factory('RegionService', function ($http, $rootScope) {

    var RegionService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        saveRegion: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.region + "/save"
            }).then(function (response) {
                return response.data;
            });
        },
        getAllRegions: function (data) {
            return $http({
                method: "GET",
                headers: headers,
                url: host2.region + "/getAll"
            }).then(function (response) {
                return response.data;
            });
        }
    }
    return RegionService;
});
