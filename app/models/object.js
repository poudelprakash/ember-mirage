import DS from 'ember-data';

export default DS.Model.extend({
	// id cannot be attr in model
  name: DS.attr(),
  label: DS.attr()
});