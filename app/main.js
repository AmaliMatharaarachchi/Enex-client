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
            templateUrl: 'app/view/individual_customer/add_customer.html'
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
        .when('/viewOrderDetails', {
            templateUrl: 'app/view/product/view_order_details.html'
        })
        .when('/addUser', {
            templateUrl: 'app/view/user/add_user.html'
        })
        .when('/deliveryOrder', {
            templateUrl: 'app/view/forms/DeliveryOrder.html'
        })
        .when('/region', {
            templateUrl: 'app/view/region/Region.html'
        })
        .when('/addRegion', {
            templateUrl: 'app/view/region/add_region.html'
        })
        .when('/deleteRegion', {
            templateUrl: 'app/view/region/delete_region.html'
        })
        .when('/viewAllRegions', {
            templateUrl: 'app/view/region/view_all_regions.html'
        });
});

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
