var app = angular.module('myApp', ['ngRoute','ngResource']);

    app.controller('UploadController', function($scope) {
        
        $scope.avatar = [
            {
                name: 'nick',
                img: 'images/avatar.png'
            },
            {
                name: 'john',
                img: 'images/avatar.png'
            }
        ];
    

    })
    
    app.controller('CommentController', function($scope){
        
        $scope.users = [
            {
                name: 'Nick',
                email: 'nick@zenkitties.pw',
                comment: 'Could you add a bazooka app?'
            },
            {
                name: 'Jeremy',
                email: 'jeremy@swagwise.com',
                comment: 'I could use a bowling app...'
            }
        ];
        
        
        $scope.comment = {};
        
        $scope.addComments = function(review){
            review.users.push($scope.comment);
            $scope.comment = {};
        };
        
        
    })
    
    app.controller('VoteController', function($scope) {
        $scope.up = 0;
        $scope.down = 0;
        
        $scope.add = function(amount) {
            $scope.up += amount;
        };
        
        $scope.subtract = function(amount) {
            $scope.down += amount;
        };
    })
    
 
    app.directive('upVote',function(){
        return {
           restrict: 'E',
           templateUrl: 'views/upvote.html'
        };
    })    
    
  
 /*   
  app.factory('weatherService', ['$http', '$q', function ($http, $q){
      function getWeather (zip) {
        var deferred = $q.defer();
        $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=')
          .success(function(data){
            deferred.resolve(data.query.results.channel);
          })
          .error(function(err){
            console.log('Error retrieving markets');
            deferred.reject(err);
          });
        return deferred.promise;
      }
      
      return {
        getWeather: getWeather
      };
    }]);

    app.controller('weatherCtrl', ['$scope', 'weatherService'], function($scope, weatherService) {
      function fetchWeather(zip) {
        weatherService.getWeather(zip).then(function(data){
          $scope.place = data;
        }); 
      }
      
      fetchWeather('93727');
        
      $scope.findWeather = function(zip) {
        $scope.place = '';
        fetchWeather(zip);
      }
    });
    
  */  

    
    
