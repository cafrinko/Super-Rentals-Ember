import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('article');
     return Ember.RSVP.hash({
       cities: this.store.findAll('city'),
       rentals: this.store.findAll('rental')
     });
   },
   actions: {
    save3(params) {
      var newarticle = this.store.createRecord('article', params);
      newarticle.save();
      this.transitionTo('index');
    }
  }
});
