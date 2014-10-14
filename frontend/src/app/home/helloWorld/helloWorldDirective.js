(function() {
    'use strict';

    app.directive('helloWorld',['helloWorld', function (helloWorld) {
        return  {
            replace: true,
            transclude: false,
            restrict: 'A',
            scope: true,
            template: '<div class="helloWorld">{{helloWorldMessage}}</div>',
            link: function link(scope) {
                scope.helloWorldMessage = helloWorld.getMessage();
            }
        };
    }]);
})();