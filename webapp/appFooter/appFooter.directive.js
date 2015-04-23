(function(){
    angular.module('appFooter').directive('appFooter',appFooterDirective);

    function appFooterDirective(){
        return {
            restrict: 'E',
            controller: 'appFooterController',
            templateUrl:'/IneedDrugs/appFooter/appFooter.template.html'
        };
    };

})();