import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

async function createTask({ description }) {
  check(description, String);
  return Tasks.insertAsync({
      description,
      createdAt: new Date(),
  });
}

async function removeTask({ _id }) {
  check(_id, String);
  return Tasks.removeAsync({ _id });
}

Meteor.methods({ createTask, removeTask });
