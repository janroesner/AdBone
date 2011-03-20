this.App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.Controllers.Contacts();
        Backbone.history.start();
    }
};
