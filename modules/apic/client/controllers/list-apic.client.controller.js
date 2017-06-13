(function () {
  'use strict';

  angular
    .module('apic')
    .controller('ApicListController', ApicListController);

  ApicListController.$inject = ['ApicService'];

  function ApicListController(ApicService) {
    var vm = this;
    console.log(this);
    str = JSON.stringify(this);
str = JSON.stringify(this, null, 4); // (Optional) beautiful indented output.
console.log(str); // Logs output to dev tools console.

    vm.apic = ApicService.query();
  }
}());
