(function(){
    angular.module('searchByActiveElement').directive('searchByActiveElement',searchByActiveElementDirective);

    function searchByActiveElementDirective(){
        return {
            restrict: 'E',
            controller: 'SearchByActiveElementController',
            templateUrl:'/IneedDrugs/startPage/searchByActiveElement/searchByActiveElement.template.html'
        };
    };
})();