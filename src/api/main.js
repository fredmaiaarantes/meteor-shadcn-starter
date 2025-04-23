import { Meteor } from 'meteor/meteor'
import { Tasks } from './tasks';

Meteor.startup(() => {
  console.log("Meteor server started");
});

Meteor.publish("tasks", function () {
  return Tasks.find({}, { sort: { createdAt: -1 } });
});