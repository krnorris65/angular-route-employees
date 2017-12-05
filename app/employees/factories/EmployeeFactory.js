angular
.module("EmployeeApp")
.factory("EmployeeFactory", function ($http) {
    return Object.create(null, {
        "list": {
            value: function () {
                return $http({
                    method: "GET",
                    url: "https://angular-employees-94a88.firebaseio.com/employees/.json"
                }).then(response => {
                    const data = response.data

                    // Make an array of objects so we can use filters
                    return Object.keys(data).map(key => {
                        data[key].id = key
                        return data[key]
                    })
                })
            }
        },
        "single": {
            value: function (key) {
                return $http({
                    method: "GET",
                    url: `https://angular-employees-94a88.firebaseio.com/employees/${key}/.json`
                }).then(response => {
                    return response.data
                })
            }
        },
        "add": {
            value: function (employee) {
                return $http({
                    method: "POST",
                    url: "https://angular-employees-94a88.firebaseio.com/employees/.json",
                    data: {
                        "firstName": employee.firstName,
                        "lastName": employee.lastName,
                        "employmentStart": Date.now(),
                        "employmentEnd": 0
                    }
                })
            }
        },
        "murder": {
            value: function (key) {
                return $http({
                    method: "DELETE",
                    url: `https://angular-employees-94a88.firebaseio.com/employees/${key}/.json`
                })
            }
        },
        "find": {
            value: function (searchString) {
                const result = this.cache.find(emp => {
                    return emp.firstName.includes(searchString) ||
                           emp.lastName.includes(searchString)
                })
                return result
            }
        },
        "fire": {
            value: function (employee, key) {
                employee.employmentEnd = Date.now()

                return $http({
                    method: "PUT",
                    url: `https://angular-employees-94a88.firebaseio.com/employees/${key}/.json`,
                    data: employee
                })
            }
        }
    })
})