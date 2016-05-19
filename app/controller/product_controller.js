/**
 * Created by Himashi Nethinika on 5/13/2016.
 */

module.controller('ProductController', ProductController);

function ProductController($scope, ProductService) {

    $scope.saveProduct = function () {

        var description = document.getElementById("description").value;
        var sellingPrice = document.getElementById("sellingPrice").value;
        var qtyOnHand = document.getElementById("qtyOnHand").value;
        var reOrderLevel = document.getElementById("reOrderLevel").value;

        if (description != '' && sellingPrice != '' && qtyOnHand != '' && reOrderLevel != '') {
            ProductService.saveProduct($scope.product).then(function (data) {
                if (data.text == "200") {
                    alert("Save Successfully..");
                    document.getElementById("description").value = '';
                    document.getElementById("sellingPrice").value = '';
                    document.getElementById("qtyOnHand").value = '';
                    document.getElementById("reOrderLevel").value = '';
                } else {
                    alert("Saving Fail..");
                }
            });
        }
    };
    
    $scope.getAllProducts=function () {
        ProductService.getAllProducts().then(function (data) {
            $scope.allProducts=data;
        });
    }


};