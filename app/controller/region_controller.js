/**
 * Created by Himashi Nethinika on 5/08/2016.
 */

module.controller('RegionController', RegionController);

function RegionController($scope, RegionService) {

    $scope.saveRegion = function () {

        var regName = document.getElementById("regName").value;

        if (regName != '') {
            RegionService.saveRegion($scope.region).then(function (data) {
                if (data.text == "200") {
                    alert("Save Successfully..");
                    document.getElementById("regName").value = '';
                } else {
                    alert("Saving Fail..");
                }
            });
        }
    };

    $scope.getAllRegions = function () {
        RegionService.getAllRegions().then(function (data) {
            console.log(data);
            $scope.allRegions = data;
        });
    };

};
