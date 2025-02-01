import { LinksCollection } from '../links/links';
import { insertLink } from '../links/links.methods';

const initialLinks = [
  {
    title: 'Follow the React Tutorial',
    url: 'https://docs.meteor.com/tutorials/react/',
  },
  {
    title: 'Read the Docs',
    url: 'https://docs.meteor.com',
  },
  {
    title: 'Join the Discussions',
    url: 'https://forums.meteor.com',
  },
  {
    title: 'Join the Discord Community',
    url: 'https://discord.gg/hZkTCaVjmT',
  },
];

export async function insertInitialLinks() {
  if (await LinksCollection.find().countAsync() === 0) {
    await Promise.all(
      initialLinks.map(link => insertLink(link))
    );
  }
} 