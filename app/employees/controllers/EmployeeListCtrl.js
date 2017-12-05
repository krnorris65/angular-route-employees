angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function ($scope, $http) {
    $scope.employees = []

    // gets the employee list from firebase and adds it to the employees array
    const getEmployees = () => {
        $http({
            method: "GET",
            url: "https://angular-employees-94a88.firebaseio.com/employees/.json"
        })
        .then(response => {
            $scope.employees = Object.keys(response.data).map(e => {
                return response.data[e]
            })
        })
    }

    getEmployees()
})