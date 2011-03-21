var Contact = Backbone.Model.extend({

  url:   function() {
           var base = 'contacts';
           if (this.isNew()) return base;
           return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
         },

  clear: function(callback){
           this.destroy({
             success:  function(model, response){
                         callback(true);
                       },
             error:    function(model, response){
                         callback(false);
                       }
           });
         }
});
