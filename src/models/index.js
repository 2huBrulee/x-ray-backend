import { sequelize } from '../config/database';

const models = {};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

const modelsInjectionMiddleware = async (req, res, next) => {
  req.context = {
    models,
    sequelize,
  };
  next();
};

export { modelsInjectionMiddleware };

export default models;
