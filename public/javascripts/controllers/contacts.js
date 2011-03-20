App.Controllers.Contacts = Backbone.Controller.extend({

routes:  {
           "contacts/:id"         : "edit",
           ""                     : "index",
           "new"                  : "newAdd",
           "contacts/destroy/:id" : "destroy"
         },

edit:    function(id) {
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

index:  function() {
           var contacts = new App.Collections.Contacts();
           contacts.fetch({
             success: function() {
               new App.Views.Contacts.Index({ collection: contacts });
             },
             error: function() {
               new Error({ message: "Error loading contacts." });
             }
           });
         },

newAdd:  function() {
           new App.Views.Contacts.Edit({ model: new Contact() });
         }
});
