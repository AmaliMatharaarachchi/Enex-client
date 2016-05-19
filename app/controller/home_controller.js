'use strict';

/**
 * Created by Himashi Nethinika on 5/13/2016.
 */
module.controller('HomeController', HomeController);

function HomeController($scope, $rootScope, UserService) {
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var userId = getParameterByName("user");
    console.log("userId :", userId)

    UserService.getCurrentUser(userId).then(function (data) {
        console.log(data);
        $rootScope.loggedUser = data;
    });


};

