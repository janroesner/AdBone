App.Views.Contacts         = App.Views.Contacts || {};
App.Views.Contacts.Contact = Backbone.View.extend({

  events: {
    "click span.contact-destroy" : "clear"
  },

  initialize: function(model){
                // TODO: awkward
                // this.model = model;
                this.contact = model.model;
                this.contact.view = this;
                this.render();
              },

  render:     function(){
                // console.log("Rendering: " + JSON.stringify(this.model));
                out = "<li><a href='#contacts/" +
                      this.contact.id + "'>" +
                      this.contact.escape('firstname') +
                      "</a></li>&nbsp;<span style='width=80px;height=80px;display=inline;' class='contact-destroy'>Delete</span>";
                $(this.el).html(out);
                $('#contacts').append(this.el);
              },

  clear:      function(){
                // console.log("Clear called for " + this.contact.get("firstname"));
                self = this;
                this.contact.clear(function(success){
                  if(success){
                    msg = "Contact successfully deleted";
                    new App.Views.Notice({ message: msg });
                    self.remove();
                  }else{
                    new App.Views.Error({message: "Deleting the contact failed: " + resp.responseText});
                  }
                });
              }
});
