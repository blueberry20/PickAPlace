
app.factory('foursquareService', ['$http','$q',  function($http) {
    var clientId = 'XP4VP0ASW5BTRAVCYEEMCQQFVIQGO1FPAI5ZR2GVEVXHVKOL';
    var clientSecret = 'C4SH5M4HHKWABXYTSBXZZXKDA4S120G1ZWTCED5WECPEWQXP';



       var factory = {
            getData: function (selectedLocation, lat, lng, selectedType, selectedPrice, selectedQuery) {  
                // console.log('service '+ selectedLocation +" " +  selectedType.categoryId +" "+ selectedPrice.priceValue);
                var parameters = {query: selectedQuery,
                        limit:7, 
                        client_id: clientId, 
                        client_secret: clientSecret, 
                        price: selectedPrice.priceValue, 
                        v: 20140806, 
                        callback: 'JSON_CALLBACK'
                    };
                    if (selectedLocation ===""){
                         parameters.ll= lat +',' + lng;
                    }
                    else{
                        parameters.near= selectedLocation;
                    }

                var data = $http({
                    url: 'https://api.foursquare.com/v2/venues/explore',
                    method: 'jsonp',
                    params: parameters
                   });

                return data;
            }
       };       
        return factory;
}]);






						