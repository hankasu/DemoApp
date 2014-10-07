'use strict';

eventsApp.factory('gravatarUrlBuilder', function () {
  return {
    buildGravatarUrl: function (email) {
      var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";

      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(email)) {
        return defaultGravatarUrl;
      }
      var hash = md5(email);

      return 'http://www.gravatar.com/avatar/' + hash + '.jpg?s=200&r=g';
    }
  };
});