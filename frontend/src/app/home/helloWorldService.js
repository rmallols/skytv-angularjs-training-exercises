(function() {
    app.service('helloWorld', [function () {
        'use strict';

        /**
         * Generates a hello world message
         *
         * @returns {string} The hello world message
         */
        function getMessage() {
            return 'Hello World!';
        }

        return  {
            getMessage: getMessage
        };
    }]);
})();
