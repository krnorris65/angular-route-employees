angular.module("EmployeeApp").constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyA6XGSXiPonSabZRUgKPHJgryOjLQ1ztUE",
    authDomain: "angular-employees-94a88.firebaseapp.com",
    databaseURL: "https://angular-employees-94a88.firebaseio.com",
    projectId: "angular-employees-94a88",
    storageBucket: "angular-employees-94a88.appspot.com",
    messagingSenderId: "411605838507"
})

angular.module("EmployeeApp").run(function (FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG)
})

angular.module("EmployeeApp").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider
        .when("/employees/list", {
            templateUrl: "app/employees/partials/list.html",
            controller: "EmployeeListCtrl"
        })
        .when('/employees/new', {
            templateUrl: 'app/employees/partials/create.html',
            controller: 'EmployeeCreateCtrl'
        })
        .when('/employees/detail/:employeeId', {
            templateUrl: 'app/employees/partials/detail.html',
            controller: 'EmployeeDetailCtrl'
        })
        .when('/auth', {
            templateUrl: 'app/auth/partials/auth.html',
            controller: 'AuthCtrl'
        })  
        .otherwise('/auth')

})