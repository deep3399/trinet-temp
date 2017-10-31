/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Code goes here
var app = angular.module("myApp", []);
app.controller("ctrl", function($scope, $http){
    var url= "../data.json";
    $scope.AddForm = function(){
        $scope.userForm.valid;
    };
   $scope.add = function(){
        $scope.tasks.push
        ({
          uname : $scope.uname, age: $scope.age, email:$scope.email
      });
            };
   
   $http.get(url).then(function(result) {
               $scope.tasks = result.data;
            });
    $scope.refresh = function(){
        $http.get(url).then(function(result) {
            $scope.tasks = result.data;
                  });
   };
   /*$(function(){
       $('#a1').DataTable();

    });*/
 
   });