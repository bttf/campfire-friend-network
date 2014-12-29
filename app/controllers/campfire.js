import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deleteFriend: function(friend) {
      var _this = this;
      this.get('model').reload().then(function(model) {
        model.get('friends').then(function(friends) {
          friends.removeRecord(friend);
          model.save().then(function() {
            friend.save().then(function() {
              console.log('friend deleted bro');
            });
          });
        });
      });
    },

    requestFriend: function(friend) {
      var _this = this;
      this.get('friends').then(function(friends) {
        friends.addRecord(friend);
        _this.get('model').save().then(function() {
          console.log('user saved bro');
        });
      });
    },

    debugReload: function() {
      var _this = this;
      this.get('model').reload().then(function(model) {
        _this.set('model', model);
        console.log('reloaded');
      });
    }
  }
});
