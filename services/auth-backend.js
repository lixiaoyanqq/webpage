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
            getNotice: getNotice,
            forgotPassword: forgotPassword,
            sendNewPassword: sendNewPassword,
            fetchVersions: fetchVersions,
            getCustomerServiceLoginUrl: getCustomerServiceLoginUrl
        };

        //////////

        function register(params, form) {
            return webHttp.Resource('user.register').post(params, form);
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

        function forgotPassword(params) {
            return webHttp.Resource('user.forgotPassword').post(params);
        }

        function sendNewPassword(resetCode, params) {
            return webHttp.Resource('user.resetPassword', {reset_code: resetCode}).put(params);
        }
        
        function fetchVersions() {
            var versions = {};
            angular.forEach(BACKEND_URL.version, function(value, key) {
                webHttp.Resource('version.' + key).get()
                    .then(function(data) {
                        versions[value] = data;
                    });
            });
            return versions;
        }
        
        function getCustomerServiceLoginUrl(token, returnTo) {
            webHttp.setToken(token);
            return webHttp.Resource('user.customerservice').get({'params': {'return_to': returnTo}, 'isAuth': true});
        }

    }
})();