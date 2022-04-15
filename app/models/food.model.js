module.exports = (sequelize, Sequelize) => {
  const Food = sequelize.define("tutorial", {
    name: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
  });
  return Food;
};
