var Contact = Backbone.Model.extend({
  url : function() {
          var base = 'contacts';
          if (this.isNew()) return base;
          return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }
});

var Contacts = Backbone.Collection.extend({
  url: function() {
         return this.document.url() + '/contacts';
       }
});

