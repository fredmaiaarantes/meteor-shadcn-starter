import { Meteor } from 'meteor/meteor';
import { insertInitialLinks } from './migrations/insert-initial-links';
import './links/links.methods';
import './links/links.publications';

Meteor.startup(async () => {
  // Run migrations
  await insertInitialLinks();
});
