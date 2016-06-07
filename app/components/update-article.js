import Ember from 'ember';

export default Ember.Component.extend({
  updatearticleForm: false,
  actions: {
    updatearticleForm() {
      this.set('updatearticleForm', true);
    },
    update(article) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updatearticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
