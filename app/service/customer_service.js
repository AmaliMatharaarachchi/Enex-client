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
                url: host2.individualCustomer + "/getCustomerByName?name=" + tag
            }).then(function (response) {
                return response.data;
            });
        },
        deleteIndiCusomer: function (data) {
            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host2.individualCustomer + "/delete"
            }).then(function (response) {
                return response.data;
            });
        },
        deleteCompanyCusomer: function (data) {
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
