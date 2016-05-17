'use strict';

angular.module('enexapp').controller('LoginCtrl', function ($scope) {
        $scope.onClickLoginBtn = function () {
            location.replace("home.html")
        };

    });
