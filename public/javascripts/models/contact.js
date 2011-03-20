var Contact = Backbone.Model.extend({

  url:   function() {
           var base = 'contacts';
           if (this.isNew()) return base;
           return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
         },

  clear: function(){
           this.destroy();
           this.view.remove();
         }
});
