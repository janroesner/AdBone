App.Views.Contacts       = App.Views.Contacts || {};
App.Views.Contacts.Index = Backbone.View.extend({

    initialize: function() {
                  this.render();
                },

    render:     function() {
                  if(this.collection.models.length > 0) {
                      var out = "<h3><a href='#new'>Create New</a></h3><ul id='contacts'></ul>";
                      $(this.el).html(out);
                      $('#app').html(this.el);
                      this.collection.each(function(contact) {
                        new App.Views.Contacts.Contact({ model: contact });
                      });
                  } else {
                      out = "<h3>No contacts! <a href='#new'>Create one</a></h3>";
                      $(this.el).html(out);
                      $('#app').html(this.el);
                  }
                }
});

