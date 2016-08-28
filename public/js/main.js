(function(scope) {
  /**
   * mwt = singleton (M)ediabrix (W)eb (T)ester
   */
  const mwt = scope.mwt = {};
  mwt.dropdowns = {};
  mwt.init = function() {
    this.bindEvents();
    this.setMeta();
    this.updateDropdowns();
  };

  mwt.bindEvents = function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
      var currentDropdown = dropdowns[i];
      mwt.dropdowns[currentDropdown.dataset.type] = currentDropdown;
      dropdowns[i].addEventListener('change', this.onDropdownChange.bind(this));
    }
  };

  mwt.onDropdownChange = function(e) {
    const dropdown = e.target;
    const type = dropdown.dataset.type;
    this.meta[type] = dropdown.value;
    this.updateUrl();
  };

  mwt.setMeta = function() {
    const pathname = window.location.pathname.substring(1);
    const split = pathname.split('/');
    const environment = split[0];
    const product = split[1];
    const adType = split[2];
    mwt.meta = { environment, product, adType };
  };

  mwt.updateDropdowns = function() {
    for (var key in this.dropdowns) {
      const dropdown = this.dropdowns[key];
      dropdown.value = mwt.meta[key];
    }
  };

  mwt.updateUrl = function() {
    const environment = this.meta.environment;
    const product = this.meta.product;
    const adType = this.meta.adType;
    window.location.pathname = `${environment}/${product}/${adType}`;
  };

  scope.addEventListener('DOMContentLoaded', function() {
    mwt.init();
  });
})(window)
