'use strict';

/**
 * @ngdoc function
 * @name racebyraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the racebyraceApp
 */
angular.module('enexapp').controller('OrderController', function ($scope, CustomerService, $filter, ProductService, OrderService, OrderDetailService) {

    // $scope.date = $filter('date')(new Date(), "yyyy-MM-dd");

    $scope.cashOrderOb = {
        "orderId": "",
        "customerId": "",
        "issueDate": $filter('date')(new Date(), "yyyy-MM-dd"),
        "validity": 0,
        "amount": 0.00
    };
    $scope.cashOrderList = [];

    $scope.item = {
        "productId": "",
        "pId": "",
        "description": "",
        "sellingPrice": 0.00,
        "qtyOnHand": 0,
        "reOrderLevel": 0
    };
    $scope.qty = '';
    $scope.unitPrice = '';
    $scope.description = '';
    $scope.allCustomer = [];
    $scope.cashOrderListOb = {
        "orderId": "",
        "productId": "",
        "description": "",
        "unitPrice": "",
        "quantity": "",
        "amount": ""
    };
    $scope.totAmount = 0;
    $scope.orderId = "";

    $scope.saveOrder = function () {
        $scope.cashOrderOb = {
            "orderId": "",
            "customerId": "",
            "issueDate": $filter('date')(new Date(), "yyyy-MM-dd"),
            "validity": 0,
            "amount": 0.00
        };
        OrderService.addCashOrder($scope.cashOrderOb).then(function (data) {
            if (data.data != null) {
                $scope.orderId = data.data;
                console.log("order Id :", data);
            }
        });
    };

    CustomerService.getAllCustomers().then(function (data) {
        console.log("All Customers :", data);
        $scope.allCustomer = data;
    });

    ProductService.getAllProducts().then(function (data) {
        console.log("All Items :", data);
        $scope.allItems = data;
    });

    $scope.onClickItemSelecter = function (item) {
        console.log("imte :", item);
        $scope.pId = item.pId;
        $scope.unitPrice = item.sellingPrice;
        $scope.availableQty = item.qtyOnHand;
        $scope.reOrderLevel = item.reOrderLevel;
        $scope.description = item.description;
    };

    $scope.onChaingeqty = function () {
        $scope.cashOrderOb.amount = $scope.unitPrice * $scope.qty
    };

    //console.log(document.getElementById("paymentId").value)
    $scope.onAddButtonClick = function () {
        $scope.cashOrderOb.customerId = document.getElementById("customeSelecter").value;
        $scope.cashOrderOb.orderId = $scope.orderId;
        console.log("order id :", $scope.cashOrderOb);
        if ($scope.qty > 0) {
            OrderService.updateOrder($scope.cashOrderOb).then(function (data) {
                console.log("after Orde Add :", data);

                if (data.data != null) {
                    //$scope.orderId = data.data;
                    $scope.orderDetailOb = {
                        "orderId": $scope.orderId,
                        "productId": $scope.pId,
                        "description": $scope.description,
                        "unitPrice": $scope.unitPrice,
                        "quantity": $scope.qty
                    };
                    console.log(" $scope.orderDetailOb :", $scope.orderDetailOb);
                    OrderDetailService.addOrderDetail($scope.orderDetailOb).then(function (data) {
                        console.log("after order Detail Add :", data);
                        if (data.data != null) {
                            $scope.cashOrderListOb = $scope.orderDetailOb;
                            $scope.cashOrderListOb.amount = $scope.cashOrderOb.amount;
                            //$scope.cashOrderListOb.orderId = $scope.orderDetailOb.orderId;
                            //$scope.cashOrderListOb.unitPrice = $scope.orderDetailOb.unitPrice;
                            //$scope.cashOrderListOb.quantity = $scope.orderDetailOb.quantity;
                            //$scope.cashOrderListOb.productId = $scope.pId;
                            //console.log("$scope.cashOrderListOb :", $scope.orderDetailOb);
                            //$scope.cashOrderList.shift();
                            $scope.cashOrderList.push($scope.cashOrderListOb);
                            //$scope.cashOrderList.amount.push($scope.cashOrderOb.amount);
                            console.log("array Order List :", $scope.cashOrderList);
                            $scope.totAmount += $scope.cashOrderOb.amount;

                            $scope.cashOrderOb = {
                                "orderId": "",
                                "customerId": "",
                                "issueDate": $filter('date')(new Date(), "yyyy-MM-dd"),
                                "validity": 0
                            };
                            $scope.orderDetailOb = {
                                "orderId": "",
                                "productId": "",
                                "description": "",
                                "unitPrice": "",
                                "quantity": ""
                            };

                            $scope.qty = '';
                            $scope.unitPrice = '';
                            $scope.description = '';

                            //$scope.orderDetailOb={};
                        } else {
                            alert("Some thing was wrong...");
                        }
                    });
                }
                ;
            });
        } else {
            alert("Please enter quantity...")
        }

    };

    $scope.onCliskSaveButton = function () {
        $scope.cashOrder = {
            "orderId": $scope.orderId,
            "customerId": document.getElementById("customeSelecter").value,
            "issueDate": $filter('date')(new Date(), "yyyy-MM-dd"),
            "validity": 0,
            "amount": $scope.totAmount
        };
        console.log("updte :", $scope.cashOrder);
        if ($scope.cashOrderList.length > 0) {
            OrderService.updateOrder($scope.cashOrder).then(function (data) {
                if (data.data != null) {
                    alert("Order Added...");
                }
            });
        } else {
            alert("Please check order details.");
        }
    }

});
