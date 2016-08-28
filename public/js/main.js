var dropdowns = document.querySelectorAll('select');
for (var i = 0; i < dropdowns.length; i++) {
  var dropdown = dropdowns[i];
  dropdown.addEventListener('change', function(e) {
    var environment = e.target.options[e.target.options.selectedIndex].value;
  });
}
