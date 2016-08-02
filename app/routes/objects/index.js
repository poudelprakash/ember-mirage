import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    // return objects;
    return this.get('store').findAll('object');
  }

});
