App.Controllers.Contacts = Backbone.Controller.extend({

routes: {
          "contacts/:id" : "edit",
          ""             : "index",
          "new"          : "newAdd"
        },

edit: function(id) {
        var contact = new Contact({ id: id });
        contact.fetch({
          success: function(model, resp) {
                     console.log("model: " +id + " - " + (contact));
                     new App.Views.Contacts.Edit({ model: contact });
                   },
          error: function() {
                   new Error({ message: 'Could not find that contact.' });
                   window.location.hash = '#';
                 }
        });
      },

index: function() {
         $.getJSON('/contacts', function(data) {
           if(data) {
             var contacts = _(data).map(function(i) { return new Contact(i); });
             new App.Views.Contacts.Index({ contacts: contacts });
           }
           else {
             new Error({ message: "Error loading contact." });
           }
         });
       },

newAdd: function() {
          new App.Views.Contacts.Edit({ model: new Contact() });
        }
});
