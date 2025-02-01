import { Meteor } from "meteor/meteor";
import { LinksCollection } from "./links";

Meteor.publish("links", function () {
  return LinksCollection.find();
});