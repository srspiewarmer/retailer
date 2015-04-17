app.controller("RetailerCtrl", function($scope, ngDialog) {

    var retailer1 = {
        id : "1",
        name : "name1",
        phone : "(01) 222-222"
    };

    var retailer2 = {
        id : "2",
        name : "name2",
        phone : "(02) 222-222"
    };

    var retailer3 = {
        id : "3",
        name : "name3",
        phone : "(03) 222-222"
    }

    var retailer4 = {
        id : "4",
        name : "name4",
        phone : "(04) 222-222"
    };

    var retailer5 = {
        id : "5",
        name : "name5",
        phone : "(05) 222-222"
    };

    $scope.retailers = [
        retailer1, retailer2, retailer3, retailer4, retailer5
    ];

    $scope.editRetailer = function(retailerId) {
        alert(retailerId);
    };

    $scope.deleteRetailer = function(retailerId) {
        alert(retailerId);
    };

    $scope.addNewRetailer = function() {
        ngDialog.open({
            template: '../html/addretailer.html',
            controller : "AddRetailerCtrl",
            scope : $scope
        });
    };

});

app.controller("AddRetailerCtrl", function($scope, ngDialog) {
    $scope.add = function() {
        var retailer = {id : $scope.retailers.length + 1,
            name : $scope.retailer.name,
            phone : $scope.retailer.phone};
        $scope.retailers.push(retailer);
        ngDialog.close();
    };

    $scope.cancel = function() {
        ngDialog.close();
    };

});

app.controller("EditRetailerCtrl", function($scope, $routeParams, $location) {
    $scope.retailerId = $routeParams.retailerId;

    $scope.stores = [{id : 1, code : "code1", name : "name1", timeZone : "Australia/Melbourne"},
        {id : 2, code : "code2", name : "name1", timeZone : "Australia/Melbourne"},
        {id : 3, code : "code3", name : "name2", timeZone : "Australia/Sydney"},
        {id : 4, code : "code4", name : "name3", timeZone : "Asia/Manila"},
        {id : 5, code : "code5", name : "name5", timeZone : "Asia/Singapore"}
    ];

    $scope.go = function (path) {
        $location.path(path);
    };

});

