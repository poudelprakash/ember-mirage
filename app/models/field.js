import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  trashed: DS.attr(),
  object: DS.belongsTo('object')
});
