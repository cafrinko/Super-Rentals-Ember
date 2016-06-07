import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('article');
   },
   actions: {
    save3(params) {
      var newarticle = this.store.createRecord('article', params);
      newarticle.save();
      this.transitionTo('index');
    }
  }
});
