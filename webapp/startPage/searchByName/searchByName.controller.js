(function(){
    angular.module('searchByName').controller('SearchByNameController', SearchByNameController);

    function SearchByNameController($scope,$http){
        $scope.selectedMedicine = null;
        $scope.getAllMedicines = function(callback){
            $http.get("/IneedDrugs/resources/js.json").success(function(data){
                $scope.medicines = data.nutritionalcare;
            });
            callback($scope.medicines);
        };

        $scope.selectionChanged = function(medicine){
            $scope.medicineInfo = medicine.name + "     "+medicine.number;
        };

        $scope.analogs = [
            {
                'name':'Paracetamol',
                'cost':'1000',
                'description':'Cool thing'
            },
            {
                'name':'Aspirin',
                'cost':'1',
                'description':'Awesome drug'
            },
            {
                'name':'Fervex',
                'cost':'50',
                'description':'Against cold'
            }
        ];

    };
})();

