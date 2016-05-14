/**
 * Created by Himashi Nethinika on 5/13/2016.
 */

function AddCustomer($scope, branchService, centerService, customerService, $route, settingsService) {
    document.getElementById("saveCusBtn").disabled = false;
    /**
     * Assigning and initializing objects and variables.
     * @type {{address: string, branch: string, businesstypeid: string, center: string, city: string, civilStatus: string, gender: string, id: string, initials: string, name: string, nic: string, province: string, tpNo: string}}
     */
    $scope.customer = {
        address: "",
        branch: "",
        businesstypeid: "",
        center: "",
        city: "",
        civilStatus: "",
        gender: "",
        id: "",
        initials: "",
        name: "",
        nic: "",
        province: "",
        tpNo: ""
    };
    $scope.errors = [];
    $scope.generateValue = false;
    $scope.allCenters = [];
    $scope.allBranch = [];

    $scope.centerLoading = true;

    /**
     * get all braches.
     */
    branchService.getAllBranches().then(function (data) {
        console.log(data);
        $scope.allBranch = data;
    });

    settingsService.getAllBusiness().then(function (data) {
        console.log(data);
        $scope.allBusiness = data;
    });

    //centerService.getAllCenter().then(function (data) {
    //    console.log(data);
    //    console.log('view all center :' + data);
    //    $scope.allCenters = data;
    //});
    /**
     * Save new customer.
     */
    $scope.addNewCustomer = function () {

        if ($scope.customer.id == '') {
            $scope.errors.push("Error");
            document.getElementById("id").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("id").style.backgroundColor = "white";
        }
        if ($scope.customer.initials == '') {
            $scope.errors.push("Error");
            document.getElementById("initials").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("initials").style.backgroundColor = "white";
        }
        if ($scope.customer.nic == '') {
            $scope.errors.push("Error");
            document.getElementById("nic").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("nic").style.backgroundColor = "white";
        }

        if ($scope.customer.branch == '') {
            $scope.errors.push("Error");
            document.getElementById("branch").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("branch").style.backgroundColor = "white";
        }

        if ($scope.customer.center == '') {
            $scope.errors.push("Error");
            document.getElementById("center").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("center").style.backgroundColor = "white";
        }

        if ($scope.customer.name == '') {
            $scope.errors.push("Error");
            document.getElementById("name").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("name").style.backgroundColor = "white";
        }

        if ($scope.customer.civilStatus == '') {
            $scope.errors.push("Error");
            document.getElementById("civilStatus").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("civilStatus").style.backgroundColor = "white";
        }

        if ($scope.customer.address == '') {
            $scope.errors.push("Error");
            document.getElementById("address").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("address").style.backgroundColor = "white";
        }

        if ($scope.customer.city == '') {
            $scope.errors.push("Error");
            document.getElementById("city").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("city").style.backgroundColor = "white";
        }

        var splitCenter = $scope.customer.center.split("/");
        console.log(splitCenter[0]);
        console.log(splitCenter[1]);

        var splitCustId = $scope.customer.id.split("/");
        console.log(splitCustId[0]);
        console.log(splitCustId[1]);
        console.log(splitCustId[2]);

        /**
         * Checking customer id and center id are matching with given params.
         */
        if ((splitCenter[0] + "/" + splitCenter[1]) == (splitCustId[0] + "/" + splitCustId[1])) {
            console.log("Center Id and Customer is are matching");
        } else {
            $scope.errors.push("Error");
            document.getElementById("id").style.backgroundColor = "#FFB2B2";
        }

        if ($scope.errors.length > 0) {
            document.getElementById('topNav').scrollIntoView();
            $scope.errors = [];
            return;
        }

        document.getElementById("saveCusBtn").disabled = true;

        var customer = {
            customerid: null,
            "code": $scope.customer.id,
            address: $scope.customer.address,
            branchid: $scope.customer.branch,
            dob: $scope.customer.dob,
            businesstypeid: $scope.customer.businesstypeid,
            centerid: $scope.customer.center,
            city: $scope.customer.city,
            civilStatus: $scope.customer.civilStatus,
            gender: $scope.customer.gender,
            initials: $scope.customer.initials,
            name: $scope.customer.name,
            nic: $scope.customer.nic,
            province: $scope.customer.province,
            tpNo: $scope.customer.tpNo
        };

        customerService.addCustomer(customer).then(function (data) {
            console.log(data);
            $.notify("Customer Added Successfully", "success");
            $route.reload();
        });
    };

    /**
     * Get checkbox value for auto generate nic.
     */
    $scope.getCheckBoxValue = function () {
        if (debug) {
            console.log($scope.generateValue);
        }
        if ($scope.generateValue == false) {

        }
    };

    $scope.getCenters = function () {
        $scope.centerLoading = true;
        centerService.getAllCenterByBranchId($scope.customer.branch).then(function (data) {
            console.log(data);
            $scope.allCenters = data;
        }).finally(function (res) {
            $scope.centerLoading = false;
            $scope.centerLoading = false;
        });
    };

    $scope.getCustomerCode = function () {
        customerService.getCustomerCodeFormServer($scope.customer.center).then(function (data) {
            console.log(data);
            $scope.customer.id = data.id;
            document.getElementById("saveCusBtn").disabled = false;
        });

    };

    $scope.focusOnNameField = function () {
        document.getElementById("name").focus();
    };

    $scope.enableSaveBtn = function () {
        document.getElementById("saveCusBtn").disabled = false;
    };

    $("#nic").keyup(function () {
        if ($(this).val().length == 9) {
            console.log($scope.customer.nic + "V");
            customerService.getCustomerByNIC($scope.customer.nic + "V").then(function (data) {
                console.log(data);
                if (data != '') {
                    document.getElementById("nic").style.backgroundColor = "#FFB2B2";
                    alert("This customer already in the system");
                    document.getElementById("saveCusBtn").disabled = true;
                } else {
                    document.getElementById("nic").style.backgroundColor = "white";
                    document.getElementById("saveCusBtn").disabled = false;
                }
            });
        } else {

        }
    });


}