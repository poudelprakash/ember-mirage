import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('objects', function(){
    this.route('edit', {path: ':object_id/edit/'});
    this.route('show', {path: ':object_id/'});
  });
});

export default Router;
