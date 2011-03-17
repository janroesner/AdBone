var Address = Backbone.Model.extend({
  url : function() {
          var base = 'address';
          if (this.isNew()) return base;
          return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }
});

var Addresses = Backbone.Collection.extend({
  url: function() {
         return this.document.url() + '/addresses';
       }
});

