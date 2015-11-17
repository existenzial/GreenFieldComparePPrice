angular.module('froogie', [])
    .config()
    .controller('SearchCtrl', function($scope, $http){
        $scope.url = 'http'; // The url should be either the UPC or tapping into the Image_Search_API

        // The function that will be executed on button click (ng-click="search()")
        $scope.search = function() {

            // Create the http post request
            // the data holds the keywords
            // The request is a JSON request.
            $http.post($scope.url, { "data" : $scope.keywords}).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
                $scope.productlist = data; // Show product-list customSearch API in our <pre></pre> element
            })
            .
            error(function(data, status) {
                $scope.data = data || "Whoops! Couldn't find your item :(";
                $scope.status = status;			
            });
        };
})
