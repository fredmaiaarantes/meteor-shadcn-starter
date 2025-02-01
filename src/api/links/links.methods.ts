import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Link, LinksCollection } from './links';

export async function insertLink({ title, url }: Pick<Link, 'title' | 'url'>) {
    check(title, String);
    check(url, String);

    return LinksCollection.insertAsync({
        title,
        url,
        createdAt: new Date(),
    });
}

export async function removeLink({ linkId }: { linkId: string }) {
    check(linkId, String);

    const link = await LinksCollection.findOneAsync(linkId);
    if (!link) {
      throw new Meteor.Error('not-found', 'Link not found');
    }

    return LinksCollection.removeAsync(linkId);
}

Meteor.methods({
  insertLink,
  removeLink,
});
