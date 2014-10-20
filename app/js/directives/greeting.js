'use strict';

eventsApp.directive('greeting', function(){
  return {
    restrict: 'E',
    replace:true,
    transclude : true,
    template: "<button class='btn btn-warning' ng-click='sayHello()'>Say Hello</button>",
    controller: function($scope) {
      var greetings = ['hello'];

      $scope.sayHello = function () {
        alert(greetings.join());
      }

      this.addGreeting = function(greeting){
        greetings.push(greeting);
      }
    }

  };
})

.directive('finnish', function(){
    return {
      restrict : 'A',
      require  : 'greeting', //sets a dependency on another directive with a controller
      link : function(scope, element, attrs, controller){
        controller.addGreeting('hei');
      }
    };
  })
.directive('hindi', function(){
    return {
      restrict : '',
      require : 'greeting',
      link : function(scope, element, attrs, controller){
        controller.addGreeting('namaste');
      }
    };
  });