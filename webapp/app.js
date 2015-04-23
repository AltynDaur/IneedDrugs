(function(){
    angular.module('iNeedDrugsApp',['ui.router', 'start','ui.bootstrap','pascalprecht.translate', 'appFooter']);
    angular.module('iNeedDrugsApp').config(iNeedDrugsAppConfig);

    function iNeedDrugsAppConfig($stateProvider, $urlRouterProvider, $translateProvider){
        var appRoute = "/IneedDrugs"
        $stateProvider.state('start',{
            url: '/',
            controller: 'StartPageController',
            templateUrl: appRoute+'/startPage/start.html'
        });
        $urlRouterProvider.otherwise('/');

        $translateProvider.translations('ru',{
            CHANGELANGUAGE:'Сменить язык'
        });
        $translateProvider.translations('en',{
            CHANGELANGUAGE: 'Change language    '
        });
        $translateProvider.preferredLanguage('en');
    };

})();