(function(){
    angular.module('appFooter').controller('appFooterController',appFooterController);

    function appFooterController($scope, $translate){
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

        $scope.proposeMedicine = function(){
            medicine = prompt("What medicine you want to propose?");
            alert('You proposition about '+medicine+' will check admin');
        };
    };


})();