appProyecto.controller('oneCtrl', function($scope,proyectoService){
	console.log("One controller");

	$scope.data = {};
	$scope.id = "";
	$scope.showData = false;

	$scope.getOne = function(){

		proyectoService.getOne($scope.id)
		.success(function(data, status, headers, config){

			$scope.data = data;
			$scope.showData = true;

			console.log($scope.data);

		}).error(function(data, status, headers, config){
			console.log(data);
			alert("Ha ocurrido un error en el servidor");
		});
	}

});