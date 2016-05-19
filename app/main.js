/**
 * Created by Himashi Nethinika on 5/08/16.
 */

var module = angular.module('enexapp', ['ngRoute']);

module.config(function ($routeProvider) {
    $routeProvider
        .when('/viewAllCustomers', {
            templateUrl: 'app/view/individual_customer/view_all_customers.html'
        })
        .when('/addCustomer', {
            templateUrl: 'app/view/individual_customer/add_customer.html'
        })
        .when('/addOrder', {
            templateUrl: 'app/view/order/add_order.html'
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
        .when('/addRegion', {
            templateUrl: 'app/view/region/add_region.html'
        })
        .when('/viewAllRegion', {
            templateUrl: 'app/view/region/view_all_region.html'
        })
        .when('/addUser', {
            templateUrl: 'app/view/user/add_user.html'
        });
});

module.run(function ($rootScope) {
    $rootScope.notification = function (type, text) {
        toastr.options = {
            "closeButton": false,
            "debug": true,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "500",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        toastr[type](text);
    };
});

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};



// NAME                   TYPE
// Admin :                1
// Manager :              2
// Factory Worker :       3
// Stock keeper :         4
// Sales Representative : 5