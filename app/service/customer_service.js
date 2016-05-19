/**
 * Created by Himashi Nethinika 5/08/2016.
 */

module.factory('CustomerService', function ($http, $rootScope) {

    var CustomerService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        saveIndiCustomer: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.individualCustomer + "/save"
            }).then(function (response) {
                return response.data;
            });
        },
<<<<<<< HEAD
=======
        updateIndiCustomer: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.individualCustomer + "/update"
            }).then(function (response) {
                return response.data;
            });
        },
>>>>>>> origin/master
        saveCompCustomer: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.companyCustomer + "/save"
            }).then(function (response) {
                return response.data;
            });
        },
<<<<<<< HEAD
=======
        updateCompCustomer: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.companyCustomer + "/update"
            }).then(function (response) {
                return response.data;
            });
        },
>>>>>>> origin/master
        getAllCustomers: function (data) {
            return $http({
                method: "GET",
                headers: headers,
                data: data,
                url: host2.individualCustomer + "/getAll"
            }).then(function (response) {
                return response.data;
            });
        },
        getAllIndividualCustomers: function (data) {
            return $http({
                method: "GET",
                headers: headers,
                data: data,
                url: host2.individualCustomer + "/getAllIndividualCustomers"
            }).then(function (response) {
                return response.data;
            });
        },
        getAllCompanyCustomers: function (data) {
            return $http({
                method: "GET",
                headers: headers,
                data: data,
                url: host2.companyCustomer + "/getAllCompanyCustomers"
            }).then(function (response) {
                return response.data;
            });
        },
        getAllSearchedCustomers: function (tag) {
            return $http({
                method: "GET",
                headers: headers,
<<<<<<< HEAD
                url: host2.individualCustomer + "/getCustomerByName?name=" + tag
=======
                url: host2.individualCustomer + "/getCustomerByName?name="+tag
>>>>>>> origin/master
            }).then(function (response) {
                return response.data;
            });
        },
<<<<<<< HEAD
        deleteIndiCusomer: function (data) {
=======
        deleteIndiCustomer: function (data) {
>>>>>>> origin/master
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.individualCustomer + "/delete"
            }).then(function (response) {
                return response.data;
            });
        },
<<<<<<< HEAD
        deleteCompanyCusomer: function (data) {
=======
        deleteCompCustomer: function (data) {
>>>>>>> origin/master
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.companyCustomer + "/delete"
            }).then(function (response) {
                return response.data;
            });
        }
    }
    return CustomerService;
});
