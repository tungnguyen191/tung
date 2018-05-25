function controller($scope, $http) {
    console.log('Hello contronler');

    var refresh = function () {
        $http.get('/customer').success(function (response) {
            console.log('get http requeses load data');
            $scope.customer = response;
            $scope.a= "";
        });
    };
    refresh();
    $scope.addContact = function () {
        console.log($scope.a);
        $http.post('/InsertCustomer', $scope.a).success(function (response) {
            console.log(response);
            refresh();
        });
        window.location.href = 'index.html';
    }

    $scope.del = function(id){
        console.log(id);
        $http.delete('/DeleteCustomer/' + id).success(function (response){
            refresh();
        });
    }
}