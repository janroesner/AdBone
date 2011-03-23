App.Views.Contacts         = App.Views.Contacts || {};
App.Views.Contacts.Contact = Backbone.View.extend({

  events: {
    "click span.contact-destroy" : "clear"
  },

  initialize: function(model){
                this.render();
              },

  render:     function(){
                // console.log("Rendering: " + JSON.stringify(this.model));
                out = ich.contact(this.model.attributes);
                $(this.el).html(out);
                $('#contacts').append(this.el);
              },

  clear:      function(){
                // console.log("Clear called for " + this.contact.get("firstname"));
                self = this;
                this.model.clear(function(success){
                  if(success){
                    new App.Views.Notice({ message: "Contact successfully deleted" });
                    self.remove();
                  }else{
                    new App.Views.Error({message: "Deleting the contact failed: " + resp.responseText});
                  }
                });
              }
});
