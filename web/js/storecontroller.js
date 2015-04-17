

app.controller("StoreCtrl", function($scope, $routeParams, ngDialog) {

    $scope.isEdit = false;
    $scope.retailerId = $routeParams.retailerId

    $scope.changeTimeZone = function(){
        ngDialog.open({
            template: '../html/selecttimezone.html',
            controller : "ChangeTimeZoneCtrl",
            scope : $scope
        });
    };

});

app.controller("ChangeTimeZoneCtrl", function($scope, ngDialog) {

    $scope.assign = function() {
        ngDialog.close();
    };

    $scope.cancel = function() {
        ngDialog.close();
    };
});


app.controller("EditStoreCtrl", function($scope, $routeParams, ngDialog) {

    $scope.changeTimeZone = function(){
        ngDialog.open({
            template: '../html/selecttimezone.html',
            controller : "ChangeTimeZoneCtrl",
            scope : $scope
        });
    };

    $scope.isEdit = true;
    $scope.storeId = $routeParams.storeId;

    $scope.groups = [{id : "1", description : "Group1", timeZone : "Asia/Manila"},
        {id : "2", description : "Group2", timeZone : "Asia/Manila"},
        {id : "3", description : "Group3", timeZone : "Asia/Manila"}
    ];

    $scope.operators = [
        {id : "1", operatorId : "1001", name : "Operator1", isAdmin : true},
        {id : "2", operatorId : "1002", name : "Operator2", isAdmin : false},
        {id : "3", operatorId : "1003", name : "Operator3", isAdmin : false}
    ];

    $scope.devices = [
        {id : "1", ipAddress : "192.168.1.1", serialNumber : "AAAA-BBB-CC-121235"},
        {id : "2", ipAddress : "192.168.1.2", serialNumber : "AAAA-BBB-CC-121236"},
        {id : "3", ipAddress : "192.168.1.3", serialNumber : "AAAA-BBB-CC-121237"}
    ];

    $scope.assignGroup = function() {
        ngDialog.open({
            template: '../html/storegrouplist.html',
            controller : "AssignStoreGroupCtrl",
            scope : $scope
        });
    };

    $scope.assignDevice = function() {
        ngDialog.open({
            template: '../html/deviceslist.html',
            controller : "AssignDeviceCtrl",
            scope : $scope
        });
    };

    $scope.addOperator = function() {
        ngDialog.open({
            template: '../html/addoperator.html',
            controller : "AddOperatorCtrl",
            scope : $scope
        });
    };
});


app.controller("AddOperatorCtrl", function($scope, ngDialog) {

    $scope.assign = function() {
        ngDialog.close();
    };

    $scope.cancel = function() {
        ngDialog.close();
    };
});

app.controller("AssignDeviceCtrl", function($scope, ngDialog) {

    $scope.devices = [
        {id : "1", ipAddress : "192.168.1.1", serialNumber : "AAAA-BBB-CC-121235"},
        {id : "2", ipAddress : "192.168.1.2", serialNumber : "AAAA-BBB-CC-121236"},
        {id : "3", ipAddress : "192.168.1.3", serialNumber : "AAAA-BBB-CC-121237"}
    ];

    $scope.assign = function() {
        ngDialog.close();
    };

    $scope.cancel = function() {
        ngDialog.close();
    };

});

app.controller("AssignStoreGroupCtrl", function($scope, ngDialog){

    $scope.storeGroups = [{id : "1", description : "Group1", timeZone : "Asia/Manila"},
        {id : "2", description : "Group2", timeZone : "Asia/Manila"},
        {id : "3", description : "Group3", timeZone : "Asia/Manila"}];

    $scope.assign = function() {
        ngDialog.close();
    };

    $scope.cancel = function() {
        ngDialog.close();
    };
});