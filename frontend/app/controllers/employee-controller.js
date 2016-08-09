(function(){
  angular.module("jobFinder").controller('employeeController', ['$scope', '$location', '$http', function($scope, $location, $http) {
      // Definindo objeto que armazena as informações do usuário
      $scope.user = {};
      // GET dados do usuário
      $http({
        method: 'GET',
        url: '/backend/public/index.php/user/' + localStorage.getItem("userID")
      }).then(function successCallback(response) {
          // Todo o conteúdo do usuário é preenchido
          console.log("preenchendo dados do usuário...");
          $scope.user.name = response.name;
          console.log($scope.user.name);
          $scope.user.profiletext = response.text;
          console.log($scope.user.profiletext);
          $scope.user.skills = response.skills;
          console.log($scope.user.skills);
          $scope.user.languages = response.languages;
          console.log($scope.user.languages);
          $scope.user.contributions = response.contributions;
          console.log($scope.user.contributions);
          $scope.user.graduation = response.graduation;
          console.log($scope.user.graduation);
          $scope.user.experience = response.experience;
          console.log($scope.user.experience);
          $scope.user.phone = response.telephone;
          console.log($scope.user.phone);
          $scope.user.birthD = response.birthD;
          console.log($scope.user.birthD);
          $scope.user.email = response.email;
          console.log($scope.user.email);
          $scope.user.password = response.passwd;
          console.log($scope.user.password);

        }, function errorCallback(response) {
          alert('ERROR! CALL THE JÃO!');
        });
      $scope.$on('$viewContentLoaded', function () {
        //   Scripts
        $('head').append('<script src="js/scrollreveal.min.js"></script>');
        $('head').append('<script src="js/jquery.easing.min.js"></script>');
        $('head').append('<script src="js/jquery.fittext.js"></script>');
        $('head').append('<script src="js/jquery.magnific-popup.min.js"></script>');
        $('head').append('<script src="js/creative.js"></script>');
        $('head').append('<script src="jasny-bootstrap/js/jasny-bootstrap.js"></script>');
        $('head').append('<script src="js/jqueryManipulation/manipulator.js"></script>');
      });
      $scope.go = function(path) {
        $location.path(path);
      };



  }]);
})();
