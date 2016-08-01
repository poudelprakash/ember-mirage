import Ember from 'ember';

	let objects = [{
        id: 1,
        name: 'Marketing Campaign'
      }, {
        id: 2,
        name: 'Media Plan'
      }, {
        id: 3,
        name: 'Coverage'
      }, ];

export default Ember.Route.extend({
	model() {
    return objects;
  }
});
