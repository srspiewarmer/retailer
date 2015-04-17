

app.controller("StoreCtrl", function($scope, $routeParams, ngDialog) {
    $scope.retailerId = $routeParams.retailerId;

    $scope.groups = [{id : "1", description : "Group1", timeZone : "Asia/Manila"},
        {id : "2", description : "Group2", timeZone : "Asia/Manila"},
        {id : "3", description : "Group3", timeZone : "Asia/Manila"}];

    $scope.devices = [
        {id : "1", ipAddress : "192.168.1.1", serialNumber : "AAAA-BBB-CC-121235"},
        {id : "2", ipAddress : "192.168.1.2", serialNumber : "AAAA-BBB-CC-121236"},
        {id : "3", ipAddress : "192.168.1.3", serialNumber : "AAAA-BBB-CC-121237"}
    ];

    $scope.assignGroup = function() {
        ngDialog.open({
            template: '../html/storegrouplist.html',
            controller : "AssignStoreGroup",
            scope : $scope
        });
    }

});

app.controller("AssignStoreGroup", function($scope, ngDialog){

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