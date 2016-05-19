/**
 * Created by Himashi Nethinika on 5/08/2016.
 */

module.controller('CustomerController', CustomerController);

function CustomerController($scope, $filter, $rootScope, CustomerService, RegionService, UserService) {

    $scope.customerDelete = {
        "customerId": "",
        "custId": "",
        "registeredDate": "",
        "address": "",
        "name": "",
        "creditPeriod": "",
        "region": "",
        "contactNo": "",
        "salesRepresentative": "",
        "nbt": "",
        "vat": ""
    };


    $scope.setCurrentDate = function () {
        $scope.customer = {
            "registeredDate": $filter('date')(new Date(), "yyyy-MM-dd")
        }
    };


    $scope.changeCustType = function () {
        var cType = document.getElementById('custType').value;
        if (cType == 1) {
            $scope.companyCustomerHide = true;
        } else {
            $scope.companyCustomerHide = false;
        }
    };

    $scope.saveCustomer = function () {

        var cType = document.getElementById('custType').value;

        var name = document.getElementById('name').value;
        var address = document.getElementById('address').value;
        var registeredDate = document.getElementById('registeredDate').value;
        var creditPeriod = document.getElementById('creditPeriod').value;
        var region = document.getElementById('region').value;
        var contactNo = document.getElementById('contactNo').value;
        var salesRepresentative = document.getElementById('salesRepresentative').value;
        var nbt = document.getElementById('nbt').value;
        var vat = document.getElementById('vat').value;

        if (cType == 1) {

            if (name != '' && address != '' && registeredDate != '' && creditPeriod != '' && region != '' && contactNo != ''
                && salesRepresentative != '') {
                var customer = {
                    "registeredDate": registeredDate,
                    "address": address,
                    "name": name,
                    "creditPeriod": creditPeriod,
                    "region": region,
                    "contactNo": contactNo,
                    "salesRepresentative": salesRepresentative
                }

                CustomerService.saveIndiCustomer(customer).then(function (data) {
                    if (data.text == "200") {
                        alert("Save Successfully..");
                        $clearForm();
                    } else {
                        alert("Saving Fail..");
                    }
                });
            }

        } else {
            if (name != '' && address != '' && registeredDate != '' && creditPeriod != '' && region != '' && contactNo != ''
                && salesRepresentative != '' && nbt != '' && vat != '') {
                CustomerService.saveCompCustomer($scope.customer).then(function (data) {
                    if (data.text == "200") {
                        alert("Save Successfully..");
                        $clearForm();
                    } else {
                        alert("Saving Fail..");
                    }
                });
            }
        }
    };

    $clearForm = function () {
        document.getElementById('name').value = '';
        document.getElementById('address').value = '';
        document.getElementById('creditPeriod').value = '';
        document.getElementById('region').value = '';
        document.getElementById('contactNo').value = '';
        document.getElementById('salesRepresentative').value = '';
        document.getElementById('nbt').value = '';
        document.getElementById('vat').value = '';

    };


    $scope.getAllCustomers = function () {
        var cType = document.getElementById('custType').value;

        if (cType == 1) {
            $scope.hideNBT = false;
            $scope.hideVAT = false;
            CustomerService.getAllCustomers().then(function (data) {
                console.log(data);
                $scope.allCustomers = data;
            });
        }
        else if (cType == 2) {
            $scope.hideNBT = true;
            $scope.hideVAT = true;
            CustomerService.getAllIndividualCustomers().then(function (data) {
                console.log(data);
                $scope.allCustomers = data;
            });
        }
        else if (cType == 3) {
            $scope.hideNBT = false;
            $scope.hideVAT = false;
            CustomerService.getAllCompanyCustomers().then(function (data) {
                console.log(data);
                $scope.allCustomers = data;
            });
        }

    };

    $scope.getAllSearchedCustomers = function () {
        var search = document.getElementById('txtSearch').value;
        CustomerService.getAllSearchedCustomers(search).then(function (data) {
            console.log(data);
            $scope.allCustomers = data;
        });

    };


    $scope.deleteConfirmCustomer = function (customer) {
        $scope.customerDelete = customer;
        $("#deleteConfirmDialog").modal("show");

    };

    $scope.showUpdateDialog = function (customer) {
        $scope.customer = customer;
        $("#updateDialog").modal("show");

    };

    $scope.deleteCustomer = function () {

        var custId = $scope.customerDelete.custId;
        var type = custId.split("-")[0];

        console.log(type);

        $("#deleteConfirmDialog").modal("hide");
        if (type == 'IC') {
            var customer = {
                "customerId": $scope.customerDelete.customerId,
                "custId": $scope.customerDelete.custId,
                "registeredDate": $scope.customerDelete.registeredDate,
                "address": $scope.customerDelete.address,
                "name": $scope.customerDelete.name,
                "creditPeriod": $scope.customerDelete.creditPeriod,
                "region": $scope.customerDelete.region,
                "contactNo": $scope.customerDelete.contactNo,
                "salesRepresentative": $scope.customerDelete.salesRepresentative
            }
            CustomerService.deleteIndiCusomer(customer).then(function (data) {
                if (data.text == "200") {
                    alert("Delete Successfully..");
                    getAllCustomers();
                } else {
                    alert("Deleting Fail..");
                }
            });
        } else {
            CustomerService.deleteCompanyCusomer($scope.customerDelete).then(function (data) {
                if (data.text == "200") {
                    alert("Delete Successfully..");
                    $scope.getAllCustomers();
                } else {
                    alert("Deleting Fail..");
                }
            });
        }


    };

    $scope.updateCusomer = function (customer) {


        $scope.notification("warning", "Not Envelope Added on this day...");
        $("#updateDialog").modal("hide");

        // CustomerService.deleteCusomer(customer).then(function (data) {
        //     if (data.text == "200") {
        //         alert("Dalete Successfully..");
        //     } else {
        //         alert("Deleting Fail..");
        //     }
        // });
    };

    $scope.getRegions = function () {
        RegionService.getAllRegions().then(function (data) {
            console.log(data);
            $scope.allRegions = data;
        });
    };

    $scope.getAllSalesRepresentative = function () {
        UserService.getAllSalesRepresentative().then(function (data) {
            console.log(data);
            $scope.allSalesRep = data;
        });
    };


};
