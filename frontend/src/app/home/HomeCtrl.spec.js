describe('Home controller', function () {

    var $scope;

    beforeEach(module('sATE'));
    beforeEach(inject(['$controller', '$rootScope', function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('HomeCtrl', { $scope: $scope });
    }]));

    it('should set the proper book title', function () {

        expect($scope.bookTitle).toBe('Mastering Web Application Development with AngularJs');
    });
});
