app.controller('MainController', ['$scope', 'foursquareService', 'locationService','$geolocation', function($scope, foursquareService, locationService, $geolocation) {

  	$scope.venueTypes = [ {type: 'bar', categoryId: '4bf58dd8d48988d116941735'}, {type: 'restaurant', categoryId: '4d4b7105d754a06374d81259'}, {type: 'coffee', categoryId: '4bf58dd8d48988d1e0931735'}];
  	$scope.priceRanges = [ {symbol: '$', priceValue: '1'}, {symbol: '$$', priceValue: '2'}, {symbol: '$$$', priceValue: '3'}, {symbol: '$$$$', priceValue: '4'}];
  	$scope.selectedLocation = "";
  	$scope.selectedType = "";
  	$scope.selectedPrice = "";
  	$scope.selectedQuery = "restaurant";
  	$scope.placesCount = 0;
  	$scope.lat = "";
  	$scope.lng = "";
  	


  	$scope.getData = function() {
  		if ($scope.selectedLocation === ""){
  			// console.log($scope.selectedLocation);
  			// console.log($scope.lat + ", " + $scope.lng);
  			$scope.getLocationData();
  		}
  		else {
  			// console.log('selectedLocation not empty');
  			// console.log($scope.selectedLocation);
  			$scope.getFoursquareData();

  		}
  		
    };

    // app.$inject = ['$scope', 'foursquareService'];


	$scope.getLocationData = function(){
        locationService.getData().then(function(response) {            
            $scope.lat = response.data.location.lat;
            $scope.lng= response.data.location.lng;

            $scope.getFoursquareData();

        }, function(result) {
            alert("Error: No location returned");
        });
	};

	$scope.getFoursquareData = function(){
		foursquareService.getData($scope.selectedLocation, $scope.lat, $scope.lng, $scope.selectedType, $scope.selectedPrice, $scope.selectedQuery).then(function(data) {
            $scope.places = data.data.response.groups[0].items;
            console.log($scope.places);
            $scope.placesCount = $scope.places.length;
        }, function(result) {
            alert("Error: No data returned");
        });
	};




	$scope.isEmptyObject = function(object){
		return object == null || object == 'undefined';
	};

	$scope.getLocationData();
}]);


