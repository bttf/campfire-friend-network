import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('campfire', params.campfire_id);
  },
  afterModel: function(model, controller) {
    model.set('newFriends', this.get('store').find('campfire'));
  }
});
