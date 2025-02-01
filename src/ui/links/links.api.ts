import { Meteor } from 'meteor/meteor';
import type { Link } from '../../api/links/links';

export const LinksApi = {
  async insert(link: Pick<Link, 'title' | 'url'>) {
    return await Meteor.callAsync('insertLink', link);
  },
  
  async remove(linkId: string) {
    return await Meteor.callAsync('removeLink', { linkId });
  },
}; 