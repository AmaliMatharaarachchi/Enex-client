/**
 * Created by Amali Lakshika on 5/18/2016.
 */

module.controller('ProductController', ProductController);
function ProductController($scope, ProductService) {
    $scope.saveCustomer = function () {
        IndividualCustomerService.saveCustomer($scope.customer).then(function (data) {
            if (data.text == "200") {
                Window.alert("successfully saved..");
            } else {
                Window.alert("Saving Failed..");
            }
        });
    };
};