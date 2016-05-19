/**
 * Created by Himashi Nethinika on 5/08/2016.
 */

module.controller('UserController', UserController);

function UserController($scope, UserService) {

    $scope.saveUser = function () {

        var userName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;
        var privilege = document.getElementById("privilege").value;
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var contactNo = document.getElementById("contactNo").value;

        if (userName != '' && password != '' && privilege != '' && name != '' && address != '' && contactNo != '') {
            UserService.saveUser($scope.user).then(function (data) {
                if (data.text == "200") {
                    alert("Save Successfully..");
                } else {
                    alert("Saving Fail..");
                }
            });
        }
    };


    $scope.getAllCustomers = function () {
        IndividualCustomerService.getAllCustomers().then(function (data) {
            console.log(data);
            $allCustomers = data;
        });
    };

};
