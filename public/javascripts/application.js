this.App = {
    Views: {
      Contacts: {}
           },
    Controllers: {},
    init: function() {
        new App.Controllers.Contacts();
        Backbone.history.start();
    }
};
