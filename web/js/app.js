var app = angular.module("retailer", ["ngRoute", "ngDialog"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
        when("/retailer/retailerlookup", {templateUrl: "../html/retailerlookup.html", controller: "RetailerCtrl"}).
        when("/retailer/:retailerId", {templateUrl: "../html/editretailer.html", controller: "EditRetailerCtrl"}).
        when("/store/addnewstore/:retailerId", {templateUrl: "../html/addnewstore.html", controller: "StoreCtrl"}).
        when("/store/editstore/:storeId", {templateUrl: "../html/addnewstore.html", controller: "EditStoreCtrl"});
}]);