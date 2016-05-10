/**
 * Created by Himashi Nethinika on 5/08/16.
 */

var module = angular.module('enexapp', ['ngRoute']);

module.config(function ($routeProvider) {
    $routeProvider
        // .when('/', {
        //     templateUrl: 'app/view/dashboard.html'
        // })
        .when('/addIndividualCustomer', {
            templateUrl: 'app/view/individual_customer/add_individual_customer.html'
        });
});

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
