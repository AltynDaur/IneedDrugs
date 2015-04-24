(function(){
    angular.module('searchByName').controller('SearchByNameController', SearchByNameController);
    var closed, opened;
    opened = 'opened';
    closed = 'closed';
    function SearchByNameController($scope,$http, $filter, $q){

        $scope.selectedMedicine = null;
        $scope.getAllMedicines = function(){
            $http.get("/IneedDrugs/resources/js.json").success(function(data){
                $scope.medicines = data.nutritionalcare;
            });
        };

        $scope.selectionChanged = function(medicine){
            $scope.medicineInfo = medicine;
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
        $scope.selected = '';
        $scope.created = false;
        $scope.state = closed;
        $scope.change = function() {
            if($scope.query.name.length < 3){
                return $scope.state = 'closed';
            } else {
                $scope.getAllMedicines();
                var filtered;
                filtered = $filter('filter')($scope.medicines, $scope.query.name);
                return $scope.state = filtered.length > 0 ? opened : 'closed';
            }

        };
        $scope.select = function(item) {
            $scope.selected = item;
            return $scope.state = closed;
        };
        return $scope.clear = function() {
            $scope.query = '';
            $scope.selected = '';
            return $scope.cleared = true;
        };

    };
    angular.module('searchByName').directive('xngFocus', xngFocusDirective);
    function xngFocusDirective(){

        return function(scope, element, attrs) {
            return scope.$watch(attrs.xngFocus, function(newValue) {
                console.log(newValue);
                return newValue && element[0].focus();
            });
        };
    };
})();

