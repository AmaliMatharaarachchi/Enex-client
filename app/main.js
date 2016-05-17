/**
 * Created by Himashi Nethinika on 5/08/16.
 */

var module = angular.module('enexapp', ['ngRoute']);

module.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'LoginCtrl'
        })
        .when('/viewAllIndividualCustomers', {
            templateUrl: 'app/view/individual_customer/view_all_individual_customers.html'
        })
        .when('/placeOrder', {
            templateUrl: 'app/view/order/add_order.html',
            controller: 'OrderCtrl'
        })
        .when('/addIndividualCustomer', {
            templateUrl: 'app/view/individual_customer/add_customer.html',
            controller:'UserCtrl'
        })
        .when('/addProduct', {
            templateUrl: 'app/view/product/add_product.html'
        })
        .when('/deleteProduct', {
            templateUrl: 'app/view/product/delete_product.html'
        })
        .when('/viewAllProducts', {
            templateUrl: 'app/view/product/view_all_products.html'
        })
        .when('/updateProduct', {
            templateUrl: 'app/view/product/update_product.html'
        })
        .when('/addUser', {
            templateUrl: 'app/view/user/add_user.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
