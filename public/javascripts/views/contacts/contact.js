App.Views.Contacts         = App.Views.Contacts || {};
App.Views.Contacts.Contact = Backbone.View.extend({

  events: {
    "click button.contact-destroy" : "clear",
    "click button#foo"             : "clear",
    "foo"                          : "clear"
  },

  initialize: function(model){
                // TODO: awkward
                // this.model = model;
                this.contact = model.model;
                this.render();
                this.contact.view = this;
                this.model.view = this;

                _.extend(this, Backbone.Events);
              },

  render:     function(){
                // console.log("Rendering: " + JSON.stringify(this.model));
                out = "<li><a href='#contacts/" +
                      this.contact.id + "'>" +
                      this.contact.escape('firstname') +
                      "</a> - <button class='contact-destroy'>Delete</a></button>";
                $('#contacts').append(out);
              },

  clear:      function(){
                console.log("Clear called for " + this.contact.get("firstname"));
                this.contact.clear();
              }

});
