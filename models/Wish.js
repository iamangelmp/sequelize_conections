const Wish = sequelize.define("Wish", {
    title: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
  });
  
  // Automatically create all tables
  await sequelize.sync();