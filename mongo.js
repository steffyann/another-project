var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/index3');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
       .state('home', {
            url: '/home',
            templateUrl: 'home2.html',
            controller: 'mycntrl as vm'
        })
        
        .state('Person', {
            url: '/Person',
            templateUrl: 'Person.html',
            controller: 'mycntrl as vm'
        })
        
        // nested list with custom controller
        .state('Pop', {
            url: '/Pop',
            templateUrl: 'Pop.html',
            controller: 'mycntrl as vm'
        })
        
       
        .state('CapitalOfState', {
            url: '/CapitalOfState',
            templateUrl: 'CapitalOfState.html',
            controller: 'mycntrl as vm'
        })

        



});


routerApp.controller('mycntrl', function($scope, $http) {
var vm=this;
vm.post = function(user) {
        $http({
            method: 'POST',
            url: "http://0.0.0.0:3000/api/people",

            data: {
                "firstname":user.firstname,
                "lastname": user.lastname
               
            }
        }).then(
            function successCallback(response) {
                console.log("aa", response);
            },
            function errorCallback(response) {}
        )
    }
vm.pos = function(use) {
        $http({
            method: 'POST',
            url: "http://0.0.0.0:3000/api/CapitalOfStates",

            data: {
                "State":use.State,
                "Capital": use.Capital
               
            }
        }).then(
            function successCallback(response) {
                console.log("bb", response);
            },
            function errorCallback(response) {}
        )
    }

    vm.po = function(us) {
        $http({
            method: 'POST',
            url: "http://0.0.0.0:3000/api/Pops",

            data: {
                "Country":us.Country,
                "Pop_in_millions": us.Pop_in_millions
               
            }
        }).then(
            function successCallback(response) {
                console.log("cc", response);
            },
            function errorCallback(response) {}
        )
    }





})