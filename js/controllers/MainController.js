app.controller('MainController', ['$scope', 'foursquareService', 'locationService','$geolocation', function($scope, foursquareService, locationService, $geolocation) {

  	$scope.venueTypes = [ {type: 'bar', categoryId: '4bf58dd8d48988d116941735'}, {type: 'restaurant', categoryId: '4d4b7105d754a06374d81259'}, {type: 'coffee', categoryId: '4bf58dd8d48988d1e0931735'}];
  	$scope.priceRanges = [ {symbol: '$', priceValue: '1'}, {symbol: '$$', priceValue: '2'}, {symbol: '$$$', priceValue: '3'}, {symbol: '$$$$', priceValue: '4'}];
  	$scope.selectedLocation = "";
  	$scope.selectedType = "";
  	$scope.selectedPrice = "";
  	$scope.selectedQuery = "restaurant";
  	$scope.placesCount;
  	$scope.lat = "";
  	$scope.lng = "";
  	

    //first time load or if location is not entered by user, get location using google maps geolocation
  	$scope.getData = function() {
  		if ($scope.selectedLocation === ""){
  			$scope.getLocationData();
  		}
  		else {
  			$scope.getFoursquareData();
  		}
  		
    };

    //call google maps geolocation api and upon getting it, call foursquare api
  	$scope.getLocationData = function(){
          locationService.getData().then(function(response) {            
              $scope.lat = response.data.location.lat;
              $scope.lng= response.data.location.lng;
              $scope.getFoursquareData();

          }, function(result) {
              alert("Error: No location returned");
          });
  	};

    //call foursquare api
  	$scope.getFoursquareData = function(){
  		foursquareService.getData($scope.selectedLocation, $scope.lat, $scope.lng, $scope.selectedType, $scope.selectedPrice, $scope.selectedQuery).then(function(data) {
              
            if (data.data.response.groups) {
              $scope.places = data.data.response.groups[0].items;
              // console.log($scope.places);
              $scope.placesCount = $scope.places.length;
            }
            else {
              $scope.placesCount = 0;
            }

          }, function(result) {
              alert("Error: No data returned");
          });
  	};


    $scope.buildVenueThumbnail = function (photo) {
        return photo.items[0].prefix + '200x200' + photo.items[0].suffix;
    };


    //check if the object is empty, we use to check if menu link is not empty
  	$scope.isEmptyObject = function(object){
  		return object == null || object == 'undefined';
  	};

	  $scope.getLocationData();

}]);


