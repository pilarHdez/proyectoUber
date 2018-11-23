appProyecto.controller('updateCtrl', function($scope,proyectoService){
	console.log("Update controller");

	$scope.data = {};
	$scope.id = "";

	$scope.getOne = function(){

		proyectoService.getOne($scope.id)
		.success(function(data, status, headers, config){

			$scope.data = data;
			console.log($scope.data);

		}).error(function(data, status, headers, config){
			console.log(data);
			alert("Ha ocurrido un error en el servidor");
		});
	}

	$scope.actualizar = function(){
		proyectoService.setOneData()
		.success(function(data, status, headers, config){
			alert("Registro actualizado");
		})
		.error(function(data, status, headers, config){
			console.log(data);
			alert("Ha ocurrido un error en el servidor");
		});
	}
});