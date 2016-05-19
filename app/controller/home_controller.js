'use strict';

/**
 * Created by Himashi Nethinika on 5/13/2016.
 */
module.controller('HomeController', HomeController);

<<<<<<< HEAD
function HomeController($scope, $rootScope, UserService) {
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var userId = getParameterByName("user");

    UserService.getCurrentUser(userId).then(function (data) {
        console.log(data);
        $rootScope.loggedUser = data;
    });
=======
function HomeController($scope, $rootScope) {

    $scope.saveLoggedUser = function () {
        // var UserName = getParameterByName("userName");
        // console.log(UserName);

    };
    //
    // function getUrlParam(param) {
    //     param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    //     var regex = new RegExp("[?&]" + param + "=([^&#]*)");
    //     url   = url || decodeURIComponent(window.location.href);
    //     var match = regex.exec(url);
    //     return match ? match[1] : "";
    // }
>>>>>>> origin/master


};

