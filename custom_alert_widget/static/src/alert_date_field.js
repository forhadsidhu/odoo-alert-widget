odoo.define('custom_alert_widget.alert_date_field', function(require) {
   "use strict";
    var BasicFields= require('web.basic_fields');
    var fieldRegistry = require('web.field_registry');
    var FieldDate = BasicFields.FieldDate;
    var ResultFieldDate;
    ResultFieldDate= FieldDate.extend({
      _renderEdit: function () {
        alert('Please be ensure project correct  start date!')
//        event.stopPropagation();
      },
      _renderReadonly: function () { return false;},
      });fieldRegistry.add('alert_date_widget', ResultFieldDate);
      return {ResultFieldDate: ResultFieldDate,};
});
