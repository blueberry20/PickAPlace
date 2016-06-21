
app.factory('foursquareService', ['$http','$q',  function($http) {
     var clientId = 'XP4VP0ASW5BTRAVCYEEMCQQFVIQGO1FPAI5ZR2GVEVXHVKOL';
     var clientSecret = 'C4SH5M4HHKWABXYTSBXZZXKDA4S120G1ZWTCED5WECPEWQXP';
    
       var factory = {
            getData: function (selectedType) {  
                console.log('service'+ selectedType);
                var data = $http({
                    url: 'https://api.foursquare.com/v2/venues/explore',
                    method: 'jsonp',
                    params: {categoryId: selectedType.categoryId, limit:7, near: '11238', client_id: clientId, client_secret: clientSecret, price: 2, v: 20140806, callback: 'JSON_CALLBACK'}
                   });
                
                console.log('data'+ data);
                return data;
            }
       };       
        return factory;
}]);


// app.factory('foursquareService', function($http) {
//     var clientId = 'XP4VP0ASW5BTRAVCYEEMCQQFVIQGO1FPAI5ZR2GVEVXHVKOL';
//     var clientSecret = 'C4SH5M4HHKWABXYTSBXZZXKDA4S120G1ZWTCED5WECPEWQXP';

//     return $http({
//         url: 'https://api.foursquare.com/v2/venues/explore',
//         method: 'jsonp',
//         params: {limit:7, near: 'New%York,NY', client_id: clientId, client_secret: clientSecret, query: selectedType, price: 2, v: 20140806, callback: 'JSON_CALLBACK'}
//         // data: 'limit=7&near=union%20square,NY&client_id='+clientId+'&client_secret='+clientSecret+'&query=bar&price=2&v=20140806'

//     }).success(function(data) {
//          // console.log(data.response.groups);
//         return data;
//     });
      
// });



						