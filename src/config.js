/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
import environment from 'dotenv';

// Tell Node to configure environment vars
environment.config();

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const dbURI = process.env.DATABASE_URI;
export const databaseUser = process.env.DATABASE_USER;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databasePort = process.env.DATABASE_PORT;

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'PRO Collection' },

  auth0: {
    id: process.env.AUTH0_APP_ID || '',
    secret: process.env.AUTH0_APP_SECRET || '',
  },

};
