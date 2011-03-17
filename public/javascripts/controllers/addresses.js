App.Controllers.Addresses = Backbone.Controller.extend({

routes: {
          "addresses/:id": "edit",
          ""             : "index",
          "new"          : "newAdd"
        },

edit: function(id) {
        var address = new Address({ id: id });
        adr.fetch({
          success: function(model, resp) {
                     new App.Views.Contacts.Edit({ model: address });
                   },
          error: function() {
                   new Error({ message: 'Could not find that address.' });
                   window.location.hash = '#';
                 }
        });
      },

index: function() {
         $.getJSON('/addresses', function(data) {
           if(data) {
             var addresses = _(data).map(function(i) { return new Address(i); });
             new App.Views.Index({ addresses: addresses });
           } else {
             new Error({ message: "Error loading addresses." });
           }
         });
       },

newAdd: function() {
          new App.Views.Edit({ model: new Address() });
        }
});
