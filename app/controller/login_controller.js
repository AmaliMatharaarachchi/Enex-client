'use strict';

/**
 * Created by Himashi Nethinika on 5/13/2016.
 */
module.controller('LoginController', LoginController);

function LoginController($scope, $location, $rootScope, UserService) {

    $scope.onClickLoginBtn = function () {

        var userName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;

        if (userName != '' && password != '') {
            UserService.login($scope.user).then(function (data) {
                if (data != '') {
                    location.replace("home.html?user=" + data.userId);
                } else {
                    alert("Your User name or Password incorrect..");
                }

            });
        } 
    };

};

