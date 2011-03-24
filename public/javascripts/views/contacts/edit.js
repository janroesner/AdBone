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
        var submitText = this.model.isNew() ? 'Create' : 'Save';
        $(this.el).html(ich.contacts_edit($.extend(this.model.attributes, {submit_text:submitText})));
        $('#app').html(this.el);
        this.$('[name=title]').val(this.model.get('title')); // use val, for security reasons
    }
});

