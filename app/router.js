import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('campfire', { path: 'campfire/:campfire_id' });
});

export default Router;
