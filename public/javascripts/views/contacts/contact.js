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
                this.model.view = this;
                _.extend(this, Backbone.Events);
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
                console.log("Clear called for " + this.contact.get("firstname"));
                // this.contact.clear();
                // this.remove();
              }

});
