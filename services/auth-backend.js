(function () {
    'use strict';

    angular.module('webpage').factory('authBackend', authBackend);

    authBackend.$inject = ['webHttp'];

    function authBackend(webHttp) {

        return {
            register: register,
            active: active,
            resetPassword: resetPassword,
            login: login,
            getNotice: getNotice
        };

        //////////

        function register(params) {
            return webHttp.Resource('user.register').post(params);
        }

        function active(activeCode) {
            return webHttp.Resource('user.active', {active_code: activeCode}).put();
        }

        function resetPassword(resetCode) {
            return webHttp.Resource('user.resetPassword', {reset_code: resetCode}).get();
        }

        function login(params) {
            return webHttp.Resource('user.login').post(params);
        }

        function getNotice() {
            return webHttp.Resource('notice.notice').get();
        }

    }
})();