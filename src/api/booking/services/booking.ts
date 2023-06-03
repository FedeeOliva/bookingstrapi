/**
 * booking service
 */
import { Strapi } from '@strapi/strapi';
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::booking.booking', ( { strapi: Strapi }) => ({
  async create(params) {
      console.log(params);
      const booking = await super.create(params);
      console.log(booking);
      return booking
  },

  async find(params) {
    console.log(params);
    // some logic here
    const { results, pagination } = await super.find();
    // some more logic
    console.log('results');
    return { results, pagination };
  }
}));
