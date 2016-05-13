/**
 * Created by Himashi Nethinika on 5/13/2016.
 */

module.controller('ProductController', ProductController);

function ProductController($scope, ProductService) {

    $scope.saveCustomer = function () {
        IndividualCustomerService.saveCustomer($scope.customer).then(function (data) {
            if (data.text == "200") {
                Window.alert("Save Successfully..");
            } else {
                Window.alert("Saving Fail..");
            }
        });
    };

   
};