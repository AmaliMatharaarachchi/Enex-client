'use strict';

/**
 * Created by Himashi Nethinika on 5/13/2016.
 */
module.controller('LoginController', LoginController);

function LoginController($scope, $location, $rootScope) {

    $scope.onClickLoginBtn = function () {

        var userName = document.getElementById("username").value;

        console.log("sfasf l;",userName);

        location.replace("home.html#/?userName=" + userName);
        // $location.path("/home");
    };
};

