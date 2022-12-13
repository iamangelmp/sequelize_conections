const Wishlist = sequelize.define("Wishlist", {
    title: DataTypes.STRING,
  });

    // Automatically create all tables
    await sequelize.sync();