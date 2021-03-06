import DS from 'ember-data';

var attr = DS.attr,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  friends: hasMany('campfire', { inverse: 'friends', async: true }),
  pendingFriends: hasMany('campfire', { inverse: null, async: true})
});
