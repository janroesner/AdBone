App.Views.Contacts = App.Views.Contacts || {};
App.Views.Contacts.Index = Backbone.View.extend({
    initialize: function() {
        this.contacts = this.options.contacts;
        this.render();
    },

    render: function() {
        if(this.contacts.length > 0) {
            var out = "<h3><a href='#new'>Create New</a></h3><ul>";
            _(this.contacts).each(function(item) {
                out += "<li><a href='#contacts/" + item.id + "'>" + item.escape('firstname') + "</a></li>";
            });
            out += "</ul>";
        } else {
            out = "<h3>No contacts! <a href='#new'>Create one</a></h3>";
        }
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});

