(function(){
    angular.module('searchByActiveElement').controller('SearchByActiveElementController', searchByActiveElementController);

    function searchByActiveElementController($http,$scope){
        $http.get("/IneedDrugs/resources/js.json").success(function(data){
            $scope.medicines = data.nutritionalcare;
        });
        $scope.showAnswer = function(){
            if(!$scope.searchParam){
                return false;
            }
            if($scope.searchParam.length < 3){
                return false;
            } else{
                return true;
            }
        };
    };
})();