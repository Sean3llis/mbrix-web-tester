(function(scope) {
  /**
   * mwt = singleton (M)ediabrix (W)eb (T)ester
   */
  const mwt = scope.mwt = {};
  mwt.init = function() {
    // this.updateMeta();
    this.bindEvents();
    this.setMeta();
  };

  mwt.bindEvents = function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener('change', this.onDropdownChange);
    }
  };

  mwt.onDropdownChange = function(e) {
    var dropdown = e.target;
    var type = dropdown.dataset.type;
  };

  mwt.setMeta = function() {
    var pathname = window.location.pathname.substring(1);
    var split = pathname.split('/');
    var env = split[0];
    var product = split[1];
    console.log('test ~~>', env);
    console.log('test ~~>', product);
  };




  scope.addEventListener('DOMContentLoaded', function() {
    mwt.init();
  });
})(window)
