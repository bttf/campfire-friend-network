import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    acceptFriend: function(friend) {
      var campfire = this.get('model');
      campfire.get('friends').then(function(friends) {
        friends.addObject(friend);
        campfire.save();
      });
      friend.get('friends').then(function(friends) {
        friends.addObject(campfire);
        friend.save();
      });
      campfire.get('pendingFriends').then(function(pFriends) {
        pFriends.removeObject(friend);
        campfire.save();
      });
    },

    addFriend: function(friend) {
      var campfire = this.get('model');
      friend.get('pendingFriends').then(function(pFriends) {
        pFriends.addObject(campfire);
        friend.save().then(function() {
          console.log('%s added to %s pendingFriends', campfire.get('name'), friend.get('name'));
        });
      });
    },

    deleteFriend: function(friend) {
      var campfire = this.get('model');
      campfire.get('friends').then(function(friends) {
        friends.removeObject(friend);
        campfire.save().then(function() {
          console.log('%s removed from %s friends', friend.get('name'), campfire.get('name'));
        });
      });
      friend.get('friends').then(function(friends) {
        friends.removeObject(campfire);
        friend.save().then(function(){
          console.log('%s removed from %s friends', campfire.get('name'), friend.get('name'));
        });
      });
    }
  }
});
