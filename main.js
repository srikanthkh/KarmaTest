describe('Unit: MainController', function() {
  // Load the module with MainController
  beforeEach(module('myApp'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should create $scope.greeting when calling sayHello', 
    function() {
      expect(scope.greeting).toBeUndefined();
      scope.sayHello();
      expect(scope.greeting).toEqual("Hello Ari");
  });
  it('should change $scope.name when calling changename', 
    function() {
      scope.changename();
      expect(scope.name).toEqual("Harsha");
  });
})
describe('Unit testing great quotes', function() {
    var $compile;
    var $rootScope;
    beforeEach(module('myApp'));
    beforeEach(inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function( {
        var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("lidless, wreathed in flame, 3 times");
    });
});