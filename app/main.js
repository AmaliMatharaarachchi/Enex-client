/**
 * Created by Himashi Nethinika on 5/08/16.
 */

var module = angular.module('enexapp', ['ngRoute']);

module.config(function ($routeProvider) {
    $routeProvider
        .when('/viewAllIndividualCustomers', {
            templateUrl: 'app/view/individual_customer/view_all_individual_customers.html'
        })
        .when('/addIndividualCustomer', {
            templateUrl: 'app/view/individual_customer/add_individual_customer.html'
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
        .when('/update', {
            templateUrl: 'app/view/product/view_all_products.html'
        });
});

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
