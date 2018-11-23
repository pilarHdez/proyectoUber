appProyecto.controller('allCtrl', function($scope, proyectoService){
	console.log("All controller");

	$scope.data = [];

	$scope.init = function(){
		proyectoService.all()
		.success(function(data, status, headers, config){

			$scope.data = data;

		}).error(function(data, status, headers, config){
			console.log(data);
			alert("Ha ocurrido un error en el servidor");
		});
	}

	$scope.init();
});