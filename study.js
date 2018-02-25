//components
(function() {

  var myComponent = {
    template: ` `;,
    controller: function(injectedService){
      //code here
    };
  };
  angular
  .module("App")
  .component("myComponent", myComponent);
}());

//controllers
(function() {
  function FormController(){
    var vm = this;
    //code here;
    };
  }
  angular
  .module("App")
  .controller("MyController", MyController);
}());

//services
(function() {

  function MyService() {
    return {
      getData: getData;
    }
  }
  angular
  .module("App")
  .factory("MyService", MySerice);
}());

//directives
(function() {

  function myDirective(){
    return = {
      template:``;
    }
  }

  angular
  .module("App")
  .directice("myDirective", myDirective);
}());
//routing
$http.get("http://example.com").then(function(response){
  console.log(response.data);
});

1)install angular-route.js in script with config.js
2)add ngRoute dependency to module
3)ng-view added to index.html
4)configure route $routeProvider
5) add links with !# (<a href="!#/nameOfWhen">)

(function() {
//like with words
  angular
  .module("App")
  .config(function($routeProvider){
    $routeProvider
      .when("/taskForm", {
        template:"<element-with-template></element-with-template>"
      })
      .when("/taskList", {
        template:"<element-with-template-two></element-with-template-two>"
      })
  });
}());
