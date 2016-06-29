
app.factory('locationService', ['$http','$q',  function($http) {

       var factory = {
            getData: function () {  
              
                var data = $http({
                    url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAgCpmzDnH5XX1fVpTi7VI9SrHrEBYPzkE',
                    method: 'post'               
                   });

                return data;
            }
       };       
        return factory;
}]);
















		 