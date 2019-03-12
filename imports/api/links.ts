import {Mongo}from 'meteor/mongo';

export interface ILinks {
  _id?: any,
  title: string,
  url: string,
}

export const Links: Mongo.Collection<ILinks> = new Mongo.Collection<ILinks>('links');
