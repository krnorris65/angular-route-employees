angular
.module("EmployeeApp")
.controller("EmployeeCreateCtrl", function ($scope, EmployeeFactory) {
    //creates a new employee object that holds the input values
    $scope.newEmployee = {}

    $scope.hireEmployee = function () {
        // creates new employee with the information entered
        const employee = {
            "firstName": $scope.newEmployee.firstName,
            "lastName": $scope.newEmployee.lastName,
            "employmentStart": Date.now(),
            "employmentEnd": 0
        }

        // adds the new employee to the database then clears the input fields
        EmployeeFactory.add(employee).then(() => {
            $scope.newEmployee.firstName = ""
            $scope.newEmployee.lastName = ""
        })
    }
})

// initial code had $scope.addEmployee instead of $scope.hireEmployee...might need to change back