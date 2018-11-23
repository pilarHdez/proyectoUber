appProyecto.controller('createCtrl', function($scope, proyectoService){
	console.log("Create controller");

	$scope.data = {}; 
	$scope.data.nombre = "";
	$scope.data.primerApellido = "";
	$scope.data.segundoApellido = "";
	$scope.data.correoElectronico = "";

	$scope.guardar = function(formCreate){
		proyectoService.setData($scope.data)
		.success(function(data, status, headers, config){
			alert("Registro guardado");

			formCreate.$setPristine(true);
			$scope.data.nombre = "";
			$scope.data.primerApellido = "";
			$scope.data.segundoApellido = "";
			$scope.data.correoElectronico = "";
		}).error(function(data, status, headers, config){
			console.log(data);
			alert("Ha ocurrido un error en el servidor");
		});
	}
});