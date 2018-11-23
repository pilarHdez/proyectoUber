appProyecto.service("proyectoService", function($http){
	return{
		all : function(){
			return $http({
				url: "app/clase/all", 
				method: "GET"
			});
		}, 
		getOne : function(id){
			return $http({
				url: "app/clase/getOne/?id="+id, 
				method: "GET"
			});
		}, 
		setData : function(data){
			return $http({
				url: "app/clase/setData", 
				headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                },
                transformRequest: transformRequestFunction,
				data: data, 
                method: "POST"
			});
		}, 
		setOneData : function(valor){
			return $http({
				url: "app/clase/setOneData", 
				headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                },
                transformRequest: transformRequestFunction,
				data: {
					"valor" : valor
				}, 
                method: "POST"
			});
		}
	};
});