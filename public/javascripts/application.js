var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.Controllers.Addresses();
        Backbone.history.start();
    }
};
