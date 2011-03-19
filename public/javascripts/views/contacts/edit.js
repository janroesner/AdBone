App.Views.Contacts.Edit = Backbone.View.extend({
    events: {
        "submit form": "save"
    },

    initialize: function() {
        console.log("model: " + (this.model.escape('firstname')));
        this.render();
    },

    save: function() {
        var self = this;
        var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";

        this.model.save({ title: this.$('[name=title]').val(),
                          body:  this.$('[name=body]').val()
                        },
                        {
            success: function(model, resp) {
                new App.Views.Notice({ message: msg });

                self.model = model;
                self.render();
                self.delegateEvents();

                Backbone.history.saveLocation('contacts/' + model.id);
            },
            error: function() {
                new App.Views.Error({message: "Saving the contact failed for some reason!"});
            }
        });

        return false;
    },

    render: function() {
        console.log("model: " + (this.model.escape('firstname')));
        var out = '<form>';
        out += "<label for='firstname'>Firstname</label>";
        out += "<input name='firstname' type='text' value='" + (this.model.escape('firstname') || '') + "'/>";

        out += "<label for='lastname'>Lastname</label>";
        out += "<input name='lastname' type='text' value='" + (this.model.escape('lastname') || '') + "'/>";

        out += "<label for='address'>Address</label>";
        out += "<input name='address' type='text' value='" + (this.model.escape('address') || '') + "'/>";

        out += "<label for='body'>Body</label>";
        out += "<textarea name='body'>" + (this.model.escape('body') || '') + "</textarea>";

        var submitText = this.model.isNew() ? 'Create' : 'Save';

        out += "<button>" + submitText + "</button>";
        out += "</form>";

        $(this.el).html(out);
        $('#app').html(this.el);

        this.$('[name=title]').val(this.model.get('title')); // use val, for security reasons
    }
});

