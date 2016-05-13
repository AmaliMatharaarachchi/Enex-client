/**
 * Created by Himashi Nethinika on 5/08/2016.
 */

module.controller('IndividualCustomerController', IndividualCustomerController);

function IndividualCustomerController($scope, IndividualCustomerService) {

    $scope.saveCustomer = function () {
        IndividualCustomerService.saveCustomer($scope.customer).then(function (data) {
            if (data.text == "200") {
                Window.alert("Save Successfully..");
            } else {
                Window.alert("Saving Fail..");
            }
        });
    };

    $scope.getAllCustomers = function () {
        IndividualCustomerService.getAllCustomers().then(function (data) {
            console.log(data);
            $allCustomers = data;
        });
    };

};
