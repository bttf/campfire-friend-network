import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    saveNewCampfire: function() {
      var controller = this;
      this.get('model.newCampfire').save().then(function() {
        controller.set('model.newCampfire', controller.get('store').createRecord('campfire'));
      });
    }
  }
});
