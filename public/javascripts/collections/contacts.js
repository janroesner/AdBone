App.Collections = App.Collections || {};

App.Collections.Contacts = Backbone.Collection.extend({

  model: Contact,

  url:   function(){
           return '/contacts';
         }

  // url:   function() {
  //          return this.document.url() + '/contacts';
  //        }
});
