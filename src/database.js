import models from './data/models';
/* eslint-disable no-console */
export default (cb) => {
  models.sync({ force: true }).catch(err => console.error(err.stack)).then(() => {
    cb();
  });
};
/* eslint-enable no-console */
