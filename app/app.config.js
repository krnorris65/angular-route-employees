let isAuth = AuthFactory => new Promise ((resolve, reject) => {
    if (AuthFactory.isAuthenticated()){
        console.log("User is authenticated, resolve route promise")
        resolve()
    } else {
        console.log("User is not authenticated, reject route promise")
        reject()
    }
})

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
    $routeProvider.
        when("/employees/list", {
            templateUrl: "app/employees/partials/list.html",
            controller: "EmployeeListCtrl",
            resolve: { isAuth }
        })
        .when('/employees/new', {
            templateUrl: 'app/employees/partials/create.html',
            controller: 'EmployeeCreateCtrl',
            resolve: { isAuth }
        })
        .when('/employees/detail/:employeeId', {
            templateUrl: 'app/employees/partials/detail.html',
            controller: 'EmployeeDetailCtrl',
            resolve: { isAuth }
        })
        .when('/auth', {
            templateUrl: 'app/auth/partials/auth.html',
            controller: 'AuthCtrl'
        })
        .otherwise('/auth')
})