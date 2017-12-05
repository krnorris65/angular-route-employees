angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function ($scope, EmployeeFactory) {
    $scope.employees = []

    //uses the employeeFactory to get data from firebase and adds them to the employees array
    EmployeeFactory.list(true).then(data => {
        $scope.employees = data
    })
})