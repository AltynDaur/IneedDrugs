(function(){
    angular.module('iNeedDrugsApp',['ui.router', 'start','ui.bootstrap']);
    angular.module('iNeedDrugsApp').config(iNeedDrugsAppConfig);

    function iNeedDrugsAppConfig($stateProvider, $urlRouterProvider){
        var appRoute = "/IneedDrugs"
        $stateProvider.state('start',{
            url: '/',
            controller: 'StartPageController',
            templateUrl: appRoute+'/startPage/start.html'
        });
        $urlRouterProvider.otherwise('/');
    };

})();