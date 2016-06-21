app.controller('MainController', ['$scope', 'foursquareService', function($scope, foursquareService) {
   //  foursquareService.success(function(data) {
   //  	$scope.places = data.response.groups[0].items;
   //  	console.log($scope.places);
  	// });

  	$scope.venueTypes = [ {type: 'bar', categoryId: '4bf58dd8d48988d116941735'}, {type: 'restaurant', categoryId: '4d4b7105d754a06374d81259'}, {type: 'coffee', categoryId: '4bf58dd8d48988d1e0931735'}];
  	$scope.priceRanges = [ {symbol: '$', priceValue: '1'}, {symbol: '$$', priceValue: '2'}, {symbol: '$$$', priceValue: '3'}, {symbol: '$$$$', priceValue: '4'}];
  	$scope.selectedLocation = "11238";

  	$scope.getData = function(selectedType) {
  		console.log('getData' + selectedType);
        foursquareService.getData(selectedType).then(function(data) {
        	console.log('then'+data);
            $scope.places = data.data.response.groups[0].items;
        }, function(result) {
            alert("Error: No data returned");
        });
    };

    app.$inject = ['$scope', 'foursquareService'];

  	 // $scope.getData = function(selectedType) {
  	 // 	console.log(selectedType);
    //      foursquareService.success(function(data) {
	   //  	$scope.places = data.response.groups[0].items;
	  	// });
    // };

  	 // $scope.getScoreData = function(score) {
    //     ScoreDataService.getScoreData(score).then(function(result) {
    //         $scope.ScoreData = result;
    //     }, function(result) {
    //         alert("Error: No data returned");
    //     });
    // };



}]);


