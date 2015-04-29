(function(){
    angular.module('iNeedDrugsApp',['ui.router', 'start','ui.bootstrap','pascalprecht.translate', 'appFooter']);
    angular.module('iNeedDrugsApp').config(iNeedDrugsAppConfig);

    function iNeedDrugsAppConfig($stateProvider, $urlRouterProvider, $translateProvider){
        var appRoute = "/IneedDrugs";
        $stateProvider.state('start',{
            url: '/',
            controller: 'StartPageController',
            templateUrl: appRoute+'/startPage/start.html'
        });
        $urlRouterProvider.otherwise('/');

        $translateProvider.translations('ru',{
            CHANGELANGUAGE:'Сменить язык',
            PROPOSEMEDICINE: 'Предложить добавить лекарство',
            ENTERNAME: 'Пожалуйста введите название лекарства (как минимум 3 символа)',
            ENTERACTIVE:'Пожалуйста введите активный элемент лекарства (как минимум 2 символа)',
            MEDICINE:'Лекарство',
            MEDICINECOST: 'Стоимость лекарства',
            MEDICINEDESCR: 'Описание лекарства',
            ACTIVEELEMENT: 'Активный элемент',
            DRUGSTORE:'Аптека'
        });
        $translateProvider.translations('en',{
            CHANGELANGUAGE: 'Change language',
            PROPOSEMEDICINE: 'Propose add drug',
            ENTERNAME: 'Please enter name of medicine(at least 3 symbols)',
            ENTERACTIVE:'Please enter name of active element of medicine(at least 2 symbols)',
            MEDICINE:'Medicine',
            MEDICINECOST: 'Medicine cost',
            MEDICINEDESCR: 'Description',
            ACTIVEELEMENT: 'Active element',
            DRUGSTORE:'Drugstore'
        });
        $translateProvider.preferredLanguage('en');
    };

})();