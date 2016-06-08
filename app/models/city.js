import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  country: DS.attr()
});
