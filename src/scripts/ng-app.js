angular
    .module('ng-slug', ['slugit'])
    .controller('SlugCtrl1', ['$scope', 'Slug',
        function($scope, Slug) {
            $scope.name = Slug.slug("bernard le pirate masqué !");
        }
    ])
    .controller('SlugCtrl2', ['$scope',
        function($scope) {
            $scope.test = function() {};
        }
    ])
    .controller('SlugCtrl3', ['$scope', 'Slug',
        function($scope, Slug) {
            console.log(Slug);
            $scope.name = "bernard le pirate masqué !";
        }
    ]);