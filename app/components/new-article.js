import Ember from 'ember';

export default Ember.Component.extend({
  addNewarticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewarticle', true);
    },
    save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city') ? this.get('city') : "",
        type: this.get('type') ? this.get('type') : "",
        image: this.get('image') ? this.get('image') : "",
        bedrooms: this.get('bedrooms') ? this.get('bedrooms') : "",
      };
      this.set('addNewarticle', false);
      this.sendAction('articleSave', params);
    }
  }
});
