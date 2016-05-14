/**
 * Created by Kavindya on 5/14/2016.
 */


module.controller('OrderController', OrderController);

function OrderController($scope, OrderService) {

    $scope.viewOrder = function () {
        OrderService.viewOrder($scope.order).then(function (data) {
            if (data.text == "200") {
                Window.alert("Save Successfully..");
            } else {
                Window.alert("Saving Fail..");
            }
        });
    };


};