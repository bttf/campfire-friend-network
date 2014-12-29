import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').find('campfire');
  },
  afterModel: function(model, controller) {
    model.set('newCampfire', this.get('store').createRecord('campfire'));
  }
});
