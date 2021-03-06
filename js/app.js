//NE PAS TOUCHER - Configuration du site

var app = angular.module('Iaad',['ui.router','ngAnimate']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider.state('home',{

		url:'/',
		templateUrl:'partials/home.html',
		controller:'HomeCtrl',

	});

	$urlRouterProvider.otherwise('/');
}]);

app.directive('ng-gallery', function() {
return {
    // Restrict it to be an attribute in this case
    restrict: 'A',
    // responsible for registering DOM listeners as well as updating the DOM
    link: function() {
        $('.materialboxed').materialbox();
    }
   };
 });

app.directive('hoverBgImage',function(){
    return {
        link: function(scope, elm, attrs){
            elm.bind('mouseenter',function(){
                this.style.backgroundImage = 'url('+attrs.hoverBgImage+')';
            });
        }
    };
});

app.directive('defaultBgImage',function(){
    return {
        link: function(scope, elm, attrs){
            elm.bind('mouseleave',function(){
                this.style.backgroundImage = 'url('+attrs.defaultBgImage+')';
            });
        }
    };
});

// PARTIE MODIIFIABLE
// La factory 'visuals' contient tous les visuels du portfolio du site. Pour ajouter un visuel, suivre la structure suivante:
// /!\ Ne pas oublier la virgule avant les accolades
//
// ,{
// 	nom:'Nom du visuel',
// 	type:'Affiche/Vitrine/Logo/Edition',
// 	url:'lien relatif vers la ressource image (/img/image.jpg) ou absolu (http://google.fr/poule.jpg)',
// 	client:'Client'
// }



// Pour modifier un visuel, changer simplement le contenu des ''. Ne pas oublier d'échapper les ( ' ) en les précédant d'un backslash: \'

app.factory('visuals',function(){
	var v = [
		{
			nom:'Aftermovie Croisière',
			type:'Affiche',
			url:'img/vtr/aftermovie_croisiere.jpg',
			client:'Yacht Club ECE'
		},
		{
			nom:'Beaujolais nouveau',
			type:'Affiche',
			url:'img/vtr/beaujolais_nouveau.jpg',
			client:'BDE ECE / Les Caves de l\'ECE'
		},
		{
			nom:'Yearbook ECE',
			type:'Logo',
			url:'img/vtr/yearbook.jpg',
			client:'BDE ECE / JBTV'
		},
		{
			nom:'Croisière',
			type:'Affiche',
			url:'img/vtr/yacht_croisiere.jpg',
			client:'Yacht Club ECE'
		},
		{
			nom:'Genesis',
			type:'Vitrine',
			url:'img/vtr/genesis.jpg',
			client:'BDE ECE'
		},
		{
			nom:'Midday in Paradise',
			type:'Edition',
			url:'img/vtr/midday.jpg',
			client:'SDI (Séminaire d\'intégration)'
		},
		{
			nom:'Moonlight',
			type:'Logo',
			url:'img/vtr/moonlight.jpg',
			client:'BDE ECE'
		},



	];
	return v;
});

//La factory products référence les produits. Chaque produit peut posséder un certain nombre d'options, contenues dans un tableau. 
// Pour ajouter une option, insérer la structure suivante à la suite dans le tableau options:[{},{},{}],

// ,{
// 	nom:'Nom de l\'option',
// 	prix:PrixDeBaseDeLoption,
// 	tooltip:'Le contenu ici s\'affichera dans une bulle d\'info au survol du bouton de l\'option',
// 	checked:false (false pour non séléctionné, true pour séléctionné par défaut)
// }

app.factory('products',function(){
	var p = [
	{
		nom:'Site vitrine',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at congue enim, sed finibus odio. Nam id luctus purus. Vivamus interdum commodo rutrum. Integer fringilla, elit quis consectetur rhoncus, dui diam semper tortor, non luctus odio felis eu nulla. Etiam pretium efficitur ante, quis placerat leo sagittis eget.',
		imgUrl:'img/option/FW-BLUR.jpg',
		hovimgUrl:'img/option/FW.jpg',
		options:[
		{
			nom:'Entretien',
			prix:10,
			tooltip:'Pour 10€/mois, nous effectuons toutes les opérations courantes d\'entretien du site',
			checked:false
		},
		{
			nom:'Revue du contenu',
			prix:20,
			tooltip:'Corrections et reformulations pour plus d\'impact client',
			checked:false
		},
		{
			nom:'Reflexion charte graphique',
			prix:20,
			tooltip:'Nous trouvons les couleurs et la typographie qui vous correspondent le mieux',
			checked:false
		},
		{
			nom:'Base de données clients',
			prix:30,
			tooltip:'Les clients peuvent saisir leurs données de contact',
			checked:false
		},
		{
			nom:'Animations',
			prix:10,
			tooltip:'Pour une expérience utilisateur améliorée, nous dynamisons votre vitrine',
			checked:false
		}],
		prix:150,
		id:0
	},
	{
		nom:'Affiche',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at congue enim, sed finibus odio. Nam id luctus purus. Vivamus interdum commodo rutrum. Integer fringilla, elit quis consectetur rhoncus, dui diam semper tortor, non luctus odio felis eu nulla. Etiam pretium efficitur ante, quis placerat leo sagittis eget.',
		imgUrl:'img/option/AFF-BLUR.jpg',
		hovimgUrl:'img/option/AFF.jpg',
		options:[
		{
			nom:'Impression',
			prix:0,
			tooltip:'Impression gratuite et envoi d\'un échantillon d\'affiches',
			checked:true
		},
		{
			nom:'Impression grande quantité',
			prix:20,
			tooltip:'Impression en grande quantité et envoi (20€/50 copies, A4/A3)',
			checked:false
		},
		{
			nom:'Grand format',
			prix:50,
			tooltip:'Impression format A0/A1/A2',
			checked:false
		}],
		prix:20,
		id:1
	},
	{
		nom:'Logo',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at congue enim, sed finibus odio. Nam id luctus purus. Vivamus interdum commodo rutrum. Integer fringilla, elit quis consectetur rhoncus, dui diam semper tortor, non luctus odio felis eu nulla. Etiam pretium efficitur ante, quis placerat leo sagittis eget.',
		imgUrl:'img/option/L-BLUR.jpg',
		hovimgUrl:'img/option/L.jpg',
		options:[],
		prix: 50,
		id:2
	},
	{
		nom:'Keynote',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at congue enim, sed finibus odio. Nam id luctus purus. Vivamus interdum commodo rutrum. Integer fringilla, elit quis consectetur rhoncus, dui diam semper tortor, non luctus odio felis eu nulla. Etiam pretium efficitur ante, quis placerat leo sagittis eget.',
		imgUrl:'img/option/KEY-BLUR.jpg',
		hovimgUrl:'img/option/KEY.jpg',
		options:[],
		prix: 25,
		id:3
	},
	{
		nom:'Aftermovie',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at congue enim, sed finibus odio. Nam id luctus purus. Vivamus interdum commodo rutrum. Integer fringilla, elit quis consectetur rhoncus, dui diam semper tortor, non luctus odio felis eu nulla. Etiam pretium efficitur ante, quis placerat leo sagittis eget.',
		imgUrl:'img/option/MOV-BLUR.jpg',
		hovimgUrl:'img/option/MOV.jpg',
		options:[],
		prix:100,
		id:4
	},
	{
		nom:'Charte Graphique',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at congue enim, sed finibus odio. Nam id luctus purus. Vivamus interdum commodo rutrum. Integer fringilla, elit quis consectetur rhoncus, dui diam semper tortor, non luctus odio felis eu nulla. Etiam pretium efficitur ante, quis placerat leo sagittis eget.',
		imgUrl:'img/option/CG-BLUR.jpg',
		hovimgUrl:'img/option/CG.jpg',
		options:[],
		prix: 50,
		id:5
	},
	{
		nom:'E-commerce',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at congue enim, sed finibus odio. Nam id luctus purus. Vivamus interdum commodo rutrum. Integer fringilla, elit quis consectetur rhoncus, dui diam semper tortor, non luctus odio felis eu nulla. Etiam pretium efficitur ante, quis placerat leo sagittis eget.',
		imgUrl:'img/mac.jpg',
		hovimgUrl:'img/mac.jpg',
		options:[],
		prix: 500,
		id:6
	},
	{
		nom:'Spécial',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at congue enim, sed finibus odio. Nam id luctus purus. Vivamus interdum commodo rutrum. Integer fringilla, elit quis consectetur rhoncus, dui diam semper tortor, non luctus odio felis eu nulla. Etiam pretium efficitur ante, quis placerat leo sagittis eget.',
		imgUrl:'img/mac.jpg',
		hovimgUrl:'img/mac.jpg',
		options:[],
		prix: 1000,
		id:7
	}
	];

	return p;
});

//FIN DE LA PARTIE MODIFIABLE

app.controller('HomeCtrl',[function(){

}]);

app.controller('SuperCtrl',['$rootScope','$scope','visuals','products',function($rootScope,$scope,visuals,products){
	$scope.visuals = visuals;
	$scope.products = products;
	$scope.originalPrice = [];
	$scope.price = 150;
	prix = 150;
	prixEntretien = 10;
	prixCharte = 30;

	//Sauvegarde des prix de base
	for(var i=0;i< products.length;i++){
		$scope.originalPrice.push(products[i].prix);
	}

	//Cocher une option
	$scope.checkOption = function(index,options){
		if(options[index].checked) options[index].checked = false;
		else options[index].checked = true;
	}

	//Mise à jour du prix en fonction des options
	$scope.updatePrice = function(product){
		product.prix = $scope.originalPrice[product.id];
		for(var i=0;i< product.options.length;i++){
			if(product.options[i].checked) product.prix+=product.options[i].prix;
		}
	}

	//Filtre portfolio
	$scope.filter = function(i){
		var newVisuals = [];

		switch(i){
				case 1: $scope.visuals = visuals; break;
				
				case 2: 		
				for (var i = 0; i < visuals.length; i++) {
					if(visuals[i].type === 'Affiche') newVisuals.push(visuals[i]);
				};
				$scope.visuals = newVisuals;
				break;
				
				case 3: 		
				for (var i = 0; i < visuals.length; i++) {
					if(visuals[i].type === 'Logo') newVisuals.push(visuals[i]);
				};
				$scope.visuals = newVisuals;
				break;

				
				case 4: 		
				for (var i = 0; i < visuals.length; i++) {
					if(visuals[i].type === 'Vitrine') newVisuals.push(visuals[i]);
				};
				$scope.visuals = newVisuals;
				break;
				
				case 5: 		
				for (var i = 0; i < visuals.length; i++) {
					if(visuals[i].type === 'Edition') newVisuals.push(visuals[i]);
				};
				$scope.visuals = newVisuals;
				break;

				default:
				break;

			}
	}

}]);

app.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});