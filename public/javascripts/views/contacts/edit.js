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

        this.model.save({
                      firstname: this.$('[name=firstname]').val(),
                      lastname:  this.$('[name=lastname]').val(),
                      address:   this.$('[name=address]').val(),
                      zipcode:   this.$('[name=zipcode]').val(),
                      city:      this.$('[name=city]').val(),
                      country:   this.$('[name=country]').val(),
                      phone:     this.$('[name=phone]').val(),
                      twitter:   this.$('[name=twitter]').val()
                        },
                        {
            success: function(model, resp) {
                new App.Views.Notice({ message: msg });

                self.model = model;
                self.render();
                self.delegateEvents();

                Backbone.history.saveLocation('contacts/' + model.id);
            },
            error: function(model, resp) {
                new App.Views.Error({message: "Saving the contact failed: " + resp.responseText});
            }
        });

        return false;
    },

    render: function() {
        console.log("model: " + (this.model.escape('firstname')));
        var out = '<form>';
        out += "<label for='firstname'>Firstname</label>";
        out += "<input name='firstname' type='text' value='" + (this.model.escape('firstname') || '') + "'/>";
        out += "<br />";

        out += "<label for='lastname'>Lastname</label>";
        out += "<input name='lastname' type='text' value='" + (this.model.escape('lastname') || '') + "'/>";
        out += "<br />";

        out += "<label for='address'>Address</label>";
        out += "<input name='address' type='text' value='" + (this.model.escape('address') || '') + "'/>";
        out += "<br />";

        out += "<label for='zipcode'>Zipcode</label>";
        out += "<input name='zipcode' type='text' value='" + (this.model.escape('zipcode') || '') + "'/>";
        out += "<br />";

        out += "<label for='city'>City</label>";
        out += "<input name='city' type='text' value='" + (this.model.escape('city') || '') + "'/>";
        out += "<br />";

        out += "<label for='country'>Country</label>";
        out += "<input name='country' type='text' value='" + (this.model.escape('country') || '') + "'/>";
        out += "<br />";

        out += "<label for='phone'>Phone</label>";
        out += "<input name='phone' type='text' value='" + (this.model.escape('phone') || '') + "'/>";
        out += "<br />";

        out += "<label for='twitter'>Twitter</label>";
        out += "<input name='twitter' type='text' value='" + (this.model.escape('twitter') || '') + "'/>";
        out += "<br />";

        var submitText = this.model.isNew() ? 'Create' : 'Save';

        out += "<button>" + submitText + "</button>";
        out += "</form>";

        $(this.el).html(out);
        $('#app').html(this.el);

        this.$('[name=title]').val(this.model.get('title')); // use val, for security reasons
    }
});

