'use strict';

eventsApp.controller('EventDetailController', function ($scope, eventData) {
  $scope.snippit = '<span style="color:red">hi there</span>';
  $scope.sortorder = 'name';
  $scope.event = eventData.event;

  $scope.upVoteSession = function (session) {
    session.upVoteCount++;
  }

  $scope.downVoteSession = function (session) {
    session.upVoteCount--;
  }
});