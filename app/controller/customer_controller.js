/**
 * Created by Himashi Nethinika on 5/08/2016.
 */

module.controller('CustomerController', CustomerController);

function CustomerController($scope, $filter, $rootScope, CustomerService, RegionService, UserService) {

    $scope.customerDelete = {
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

    $scope.customerUpdate = {
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

         // var customer = document.getElementById("deleteBtn").value;
        var customer=customer;

        console.log("CUSTOMER", customer);
        $scope.customerDelete = customer;
        $scope.customerDelete.custId = customer.custId;
        $scope.customerDelete.registeredDate = customer.registeredDate;
        $scope.customerDelete.address = customer.address;
        $scope.customerDelete.name = customer.name;
        $scope.customerDelete.creditPeriod = customer.creditPeriod;
        $scope.customerDelete.region = customer.region;
        $scope.customerDelete.contactNo = customer.contactNo;
        $scope.customerDelete.salesRepresentative = customer.salesRepresentative;
        $scope.customerDelete.nbt = customer.nbt;
        $scope.customerDelete.vat = customer.vat;

        console.log("DELETE CUSTOMER", $scope.customerDelete);

        $("#deleteConfirmDialog").modal("show");

    };

    $scope.deleteCustomer = function () {

        var custId = $scope.customerDelete.custId;
        var type = custId.split("-");


        console.log("DELETE sss", $scope.customerDelete);
        console.log(custId);
        console.log(type);
        $("#deleteConfirmDialog").modal("hide");
        if (type[0] == 'IC') {
            var customer = {
                "custId": $scope.customerDelete.custId,
                "registeredDate": $scope.customerDelete.registeredDate,
                "address": $scope.customerDelete.address,
                "name": $scope.customerDelete.name,
                "creditPeriod": $scope.customerDelete.creditPeriod,
                "region": $scope.customerDelete.region,
                "contactNo": $scope.customerDelete.contactNo,
                "salesRepresentative": $scope.customerDelete.salesRepresentative
            }
            console.log("IC delete "+ customer)
            CustomerService.deleteIndiCustomer(customer).then(function (data) {
                if (data.text == "200") {
                    alert("Delete Successfully..");
                } else {
                    alert("Deleting Fail..");
                }
            });
        }else {
            CustomerService.deleteCompCustomer($scope.customerDelete).then(function (data) {
                if (data.text == "200") {
                    alert("Delete Successfully..");
                } else {
                    alert("Deleting Fail..");
                }
            });
        }


    };


    $scope.showUpdateDialog = function (customer) {
        $scope.customer = customer;
        var custId=$scope.customer.custId;
        var type = custId.split("-");

        // console.log("CUSTOMER" , customer);
        // $scope.customerUpdate = customer;
        // $scope.customerUpdate.custId = customer.custId;
        // $scope.customerUpdate.registeredDate = customer.registeredDate;
        // $scope.customerUpdate.address = customer.address;
        // $scope.customerUpdate.name = customer.name;
        // $scope.customerUpdate.creditPeriod = customer.creditPeriod;
        // $scope.customerUpdate.region = customer.region;
        // $scope.customerUpdate.contactNo = customer.contactNo;
        // $scope.customerUpdate.salesRepresentative = customer.salesRepresentative;
        // $scope.customerUpdate.nbt = customer.nbt;
        // $scope.customerUpdate.vat = customer.vat;
        //
        // console.log("Update CUSTOMER", $scope.customerUpdate);

        $("#updateDialog").modal("show");
        if (type[0] == 'IC') {
            $scope.companyCustomerHide = true;
        } else {
            $scope.companyCustomerHide = false;
        }


    };


    $scope.updateCustomer = function (customer) {


        // $scope.notification("warning", "Not Envelope Added on this day...");

        $scope.customer = customer;
        var custId = $scope.customer.custId;
        var tk8ype = custId.split("-");
        

        console.log("Update sss", $scope.customer);
        console.log(custId);
        console.log(type);
        var name = $scope.customer.name;
        var address = $scope.customer.address;
        var creditPeriod = $scope.customer.creditPeriod;
        var region = $scope.customer.region;
        var contactNo = $scope.customer.contactNo;
        var salesRepresentative = $scope.customer.salesRepresentative;
        var nbt =$scope.customer.nbt;
        var vat = $scope.customer.vat;

        if (type[0] == 'IC') {
            if (name != '' && address != '' && registeredDate != '' && creditPeriod != '' && region != '' && contactNo != ''
                && salesRepresentative != '') {
                var customer = {
                    "registeredDate": $scope.customer.registeredDate,
                    "address": $scope.customer.address,
                    "name": $scope.customer.name,
                    "creditPeriod": $scope.customer.creditPeriod,
                    "region": $scope.customer.region,
                    "contactNo": $scope.customer.contactNo,
                    "salesRepresentative": $scope.customer.salesRepresentative
                }


                CustomerService.updateIndiCustomer($scope.customer).then(function (data) {
                    if (data.text == "200") {
                        alert("Update Successfully..");
                    } else {
                        alert("Updating Fail..");
                    }
                });
            }
        }else {
            if (name != '' && address != '' && registeredDate != '' && creditPeriod != '' && region != '' && contactNo != ''
                && salesRepresentative != '' && nbt != '' && vat != '') {
                CustomerService.updateCompCustomer($scope.customer).then(function (data) {
                    if (data.text == "200") {
                        alert("Update Successfully..");
                    } else {
                        alert("Updating Fail..");
                    }
                });
            }

        }
        $("#updateDialog").modal("hide");
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
