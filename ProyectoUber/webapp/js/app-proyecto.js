/*
 * Aplicación: Proyecto
 * Fecha desarrollo: 17/Julio/2018
 * Elaborado por: Pilar Hdez.
 */

//Aplicación 
var appProyecto = angular.module('proyecto',['ngRoute']);

//Rutas 
appProyecto.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/all',{
    				templateUrl: "all.html",
                    controller: "allCtrl"})
		.when('/one',{
    				templateUrl: "one.html",
                    controller: "oneCtrl"})
		.when('/update',{
    				templateUrl: "update.html",
                    controller: "updateCtrl"})
		.when('/create',{
    				templateUrl: "create.html",
                    controller: "createCtrl"})
        .otherwise({
                    redirectTo: '/all'
                });
}]);