// Generated by CoffeeScript 1.6.3
(function() {
  var NavigationBar;

  console.log('app init');

  window.tokdoc = {};

  NavigationBar = (function() {
    function NavigationBar() {
      this.logo = ko.observable(true);
      this.show_user_login = ko.observable(true);
    }

    return NavigationBar;

  })();

  window.tokdoc.navbar = new NavigationBar();

}).call(this);
