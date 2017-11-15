app.controller("mainController" , function($scope , $http){


$scope.servicios = [
	{nombre:"Busqueda y Selección" , descripcion:"Porque somos especialistas, estamos comprometidos en la búsqueda de un resultado que signifique tanto un crecimiento personal y profesional para nuestros candidatos, como también una incorporación de valor al equipo humano y técnico de nuestros clientes." , img:"/imagenes/web/portada2.jpg"},
	{nombre:"Capacitación" , descripcion:"Como creemos en la búsqueda constante de excelencia, potenciamos equipos y profesionales mediante la implementación y el diseño de innovadoras propuestas de capacitación, orientadas a impactar directamente sobre su performance personal y profesional." , img:"/imagenes/web/portada5.jpg"},
	{nombre:"Psicotécnicos y Evaluaciones" , descripcion:"Involucrados con la calidad, facilitamos una amplia gama de evaluaciones psicotecnicas diseñadas y administradas por psicólogos y especialistas en las distintas ramas de la industria, lo cual nos permite alcanzar los mejores resultados en cada proceso de reclutamiento." , img:"/imagenes/web/service2.jpg"},
	
]

})