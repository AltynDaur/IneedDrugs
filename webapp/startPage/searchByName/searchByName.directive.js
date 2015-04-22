(function(){
    angular.module('searchByName').directive('searchByName',searchByNameDirective);

    function searchByNameDirective(){
        return {
            restrict: 'E',
            controller: 'SearchByNameController',
            templateUrl:'/IneedDrugs/startPage/searchByName/searchByName.template.html'
        };
    };
})();