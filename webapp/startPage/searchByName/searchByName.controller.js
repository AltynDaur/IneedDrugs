(function(){
    angular.module('searchByName').controller('SearchByNameController', SearchByNameController);

    function SearchByNameController($scope,$http, $filter, $q){

        $scope.selected = null;
        $scope.getAllMedicines = function(){
            $http.get("/IneedDrugs/resources/js.json").success(function(data){
                $scope.medicines = data.nutritionalcare;
            });
        };

        $scope.analogs = [
            {
                'name':'Paracetamol',
                'cost':'150',
                'description':'Cool thing',
                'activeElement': 'Paracetamol',
                'drugStore':{
                    'name': 'BioSfera',
                    'link': 'http://biosfera.kz/product/product?product_id=2597'
                }
            },
            {
                'name':'Парацетофит',
                'cost':'275',
                'description':'Awesome drug',
                'activeElement': 'Paracetamol',
                'drugStore':{
                    'name': 'BioSfera',
                    'link': 'http://biosfera.kz/product/product?product_id=2605'
                }
            },
            {
                'name':'Агриппин с парацетамолом',
                'cost':'90',
                'description':'Against cold',
                'activeElement': 'Paracetamol',
                'drugStore':{
                    'name': 'BioSfera',
                    'link': 'http://biosfera.kz/product/product?product_id=116'
                }
            }
        ];
        $scope.selectionChanged = function(value) {
            if(value.length < 3){
                $scope.medicines = [];
            } else {
                $scope.getAllMedicines();
            }

        };

    };

})();

