(function(app) {
  app.AppComponent = ng.core
    .Component({
      selector: 'my-app',
      templateUrl: 'app/app.html'
    })
    .Class({
      constructor: function() {
        this.myName = 'Venki';
        this.name = 'Venki';
        this.ego = '';
      }
    });
})(window.app || (window.app = {}));
