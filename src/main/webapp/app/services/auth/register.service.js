(function () {
    'use strict';

    angular
        .module('jhipsterGhostApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
